<?php
declare(strict_types=1);

ob_start();
ini_set('display_errors', '0');
error_reporting(E_ALL);
header('Content-Type: application/json');

set_error_handler(static function (int $severity, string $message, string $file, int $line): bool {
    error_log(sprintf('Lead form PHP error [%d] %s in %s:%d', $severity, $message, $file, $line));
    return true;
});

register_shutdown_function(static function (): void {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR], true)) {
        while (ob_get_level() > 0) {
            ob_end_clean();
        }
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Server error. Please try again or call us directly.']);
    }
});

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean_input(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

function respond(bool $success, string $message, int $status = 200): void
{
    while (ob_get_level() > 0) {
        ob_end_clean();
    }
    header('Content-Type: application/json');
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if (clean_input('website') !== '') {
    respond(false, 'Invalid submission.', 400);
}

$name = clean_input('name');
$phone = preg_replace('/\s+/', '', clean_input('phone'));
$clinic = clean_input('clinic');
$interest = clean_input('interest');
$prefDate = clean_input('pref_date');
$pageUrl = clean_input('page_url');

$allowedClinics = ['Kondapur', 'Kukatpally KPHB', 'Banjara Hills', 'Manikonda', 'Kompally'];
$allowedInterests = ['Invisalign', 'Clear aligners', 'Metal braces', 'Ceramic braces', 'Not sure'];

if (mb_strlen($name) < 2 || mb_strlen($name) > 80) {
    respond(false, 'Please enter a valid name.', 422);
}

if (!preg_match('/^[6-9][0-9]{9}$/', $phone)) {
    respond(false, 'Please enter a valid 10-digit mobile number.', 422);
}

if (!in_array($clinic, $allowedClinics, true)) {
    respond(false, 'Please select a valid clinic.', 422);
}

if (!in_array($interest, $allowedInterests, true)) {
    respond(false, 'Please select a valid treatment.', 422);
}

if ($prefDate !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $prefDate)) {
    respond(false, 'Please select a valid preferred date.', 422);
}

if ($pageUrl === '') {
    $pageUrl = (isset($_SERVER['HTTP_REFERER']) ? (string)$_SERVER['HTTP_REFERER'] : '');
}

$utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
$utmData = [];
foreach ($utmFields as $field) {
    $value = clean_input($field);
    if ($value !== '') {
        $utmData[$field] = $value;
    }
}

$to = 'abhisheksharma@reinventdigital.com';
$subject = 'New Eledent Aligners Lead';

$lines = [
    'New lead received from Eledent clear aligners landing page.',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Preferred Clinic: ' . $clinic,
    'Interested In: ' . $interest,
];

if ($prefDate !== '') {
    $lines[] = 'Preferred Date: ' . $prefDate;
}

if ($pageUrl !== '') {
    $lines[] = 'Page URL: ' . $pageUrl;
}

if ($utmData !== []) {
    $lines[] = '';
    $lines[] = 'UTM Parameters:';
    foreach ($utmData as $key => $value) {
        $lines[] = $key . ': ' . $value;
    }
}

$lines[] = '';
$lines[] = 'Submitted At: ' . date('Y-m-d H:i:s');
$lines[] = 'IP Address: ' . ($_SERVER['REMOTE_ADDR'] ?? '');

$message = implode("\n", $lines);
$host = $_SERVER['HTTP_HOST'] ?? 'eledenthospitals.com';
$host = preg_replace('/[^a-zA-Z0-9.-]/', '', $host);
$from = 'no-reply@' . ($host !== '' ? $host : 'eledenthospitals.com');

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Eledent Website <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $from . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $subject, $message, implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'Mail could not be sent. Please call us directly.', 500);
}

respond(true, 'Thank you. Your request has been submitted.');
