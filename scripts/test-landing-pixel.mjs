import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

// Optional local server: npm run test:landing-pixel -- http://localhost:3000
// The SDK is mocked: these checks never submit live tracking events or forms.
const publicRoot = new URL('../public/', import.meta.url);
const baseUrl = process.argv[2];
const sdkUrl = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
const expectedCalls = [
  ['init', { pixelId: '4bFkRNsGsTDskfdoNsRwLJ', debug: true }],
  ['measure', 'lead_created', { type: 'customer_action' }],
];
const normalize = value => JSON.parse(JSON.stringify(value));
let pageCount = 0;
let urlCount = 0;

function verifyPixel(html, label) {
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  const pixelScripts = scripts.filter(match => /\boaiq\b/.test(match[2]));
  assert.equal(pixelScripts.length, 2, `${label}: one init script and one event script`);
  const [init, event] = pixelScripts;
  const headEnd = html.indexOf('</head>');
  const bodyStart = html.search(/<body\b/i);
  const bodyEnd = html.indexOf('</body>');
  assert.ok(init.index > html.indexOf('<head>') && init.index + init[0].length < headEnd,
    `${label}: pixel must be inside head`);
  assert.ok(event.index > bodyStart && event.index + event[0].length < bodyEnd,
    `${label}: event must be inside body`);
  assert.equal(html.slice(event.index + event[0].length, bodyEnd).trim(), '',
    `${label}: event must be the last body script`);
  assert.equal(html.split(sdkUrl).length - 1, 1, `${label}: no duplicate SDK loader`);
  assert.equal(html.split('lead_created').length - 1, 1, `${label}: no duplicate lead event`);

  // Check all executable inline scripts for syntax errors without running UI code.
  for (const [, attrs, code] of scripts) {
    if (!/\btype\s*=\s*["']application\/ld\+json["']/i.test(attrs)) {
      new vm.Script(code, { filename: label });
    }
  }

  for (const timing of ['delayed', 'ready-before-event', 'already-loaded']) {
    const inserted = [];
    const calls = [];
    const loadedSdk = (...args) => calls.push(args);
    const first = { parentNode: { insertBefore(script, reference) {
      assert.equal(reference, first);
      inserted.push(script);
    } } };
    const context = vm.createContext({ document: {
      createElement(tag) { assert.equal(tag, 'script'); return {}; },
      getElementsByTagName(tag) { assert.equal(tag, 'script'); return [first]; },
    } });
    context.window = context;
    if (timing === 'already-loaded') context.oaiq = loadedSdk;
    vm.runInContext(init[2], context);
    if (timing === 'ready-before-event') {
      context.oaiq.q.forEach(args => loadedSdk(...args));
      context.oaiq = loadedSdk;
    }
    vm.runInContext(event[2], context);
    if (timing === 'delayed') {
      // A slow or blocked SDK must queue both calls without throwing.
      context.oaiq.q.forEach(args => loadedSdk(...args));
    }
    assert.deepEqual(normalize(calls), expectedCalls, `${label}: ${timing} call order/payload`);
    assert.deepEqual(inserted, timing === 'already-loaded' ? [] : [{ async: 1, src: sdkUrl }],
      `${label}: ${timing} loads SDK asynchronously at most once`);
  }
}

for (const folder of await readdir(publicRoot, { withFileTypes: true })) {
  if (!folder.isDirectory()) continue;
  const folderUrl = new URL(`${folder.name}/`, publicRoot);
  const files = await readdir(folderUrl);
  if (!files.includes('index.html')) continue;
  assert.ok(files.includes('thankyou.html'), `${folder.name}: thank-you page exists`);
  for (const name of files.filter(name => /^(index|thankyou|Thank)\.html$/.test(name))) {
    const file = new URL(name, folderUrl);
    const html = await readFile(file, 'utf8');
    verifyPixel(html, fileURLToPath(file));
    pageCount++;
    if (baseUrl) {
      const routes = [`/${folder.name}/${name}`];
      if (name === 'index.html') routes.push(`/${folder.name}`);
      for (const route of routes) {
        const response = await fetch(new URL(route, baseUrl), { signal: AbortSignal.timeout(30000) });
        assert.equal(response.status, 200, `${route}: HTTP 200`);
        assert.match(response.headers.get('content-type') ?? '', /text\/html/, `${route}: HTML response`);
        const served = await response.text();
        assert.equal(served, html, `${route}: server serves the updated file`);
        verifyPixel(served, route);
        urlCount++;
      }
    }
  }
}
assert.ok(pageCount > 0, 'Landing pages must be discovered');
console.log(`PASS: ${pageCount} pages; head/body placement, duplicates, JS syntax, and 3 SDK timing scenarios per page.`);
if (baseUrl) console.log(`PASS: ${urlCount} local URLs, including clean landing routes, return the updated HTML with HTTP 200.`);
console.log('SDK mocked; live dashboard receipt and real form submissions are not tested.');
