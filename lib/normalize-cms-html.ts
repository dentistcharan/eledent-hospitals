const INTERNAL_ORIGIN_PATTERN =
  /https?:\/\/(?:www\.)?eledenthospitals\.com(?=\/|["'#?\s]|$)/gi;

export function normalizeCmsHtml(html: string): string {
  if (!html) return html;

  return html
    .replace(INTERNAL_ORIGIN_PATTERN, "")
    .replace(
      /(href=["'])(\/[^"'?#]*?)\/(\?[^"']*|#[^"']*)?(["'])/gi,
      (_match, prefix: string, path: string, suffix = "", quote: string) =>
        `${prefix}${path || "/"}${suffix}${quote}`
    );
}
