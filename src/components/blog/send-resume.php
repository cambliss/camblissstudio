<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $jobRole = $_POST['jobRole'];

    // Handle the uploaded resume
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $resumeTmpPath = $_FILES['resume']['tmp_name'];
        $resumeName = $_FILES['resume']['name'];
        $uploadDir = 'uploads/';
        $uploadedFilePath = $uploadDir . basename($resumeName);

        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        move_uploaded_file($resumeTmpPath, $uploadedFilePath);

        // Email content
        $to = 'contact@camblissstudio.com';
        $subject = "New Job Application for $jobRole";
        $message = "
            <p>You have received a new job application:</p>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Job Role:</strong> $jobRole</p>
            <p>Resume attached.</p>
        ";

        // Email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: $email" . "\r\n";

        // Attach resume
        $file = file_get_contents($uploadedFilePath);
        $content = chunk_split(base64_encode($file));
        $separator = md5(time());
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$separator}\"\r\n";

        $body = "--{$separator}\r\n";
        $body .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
        $body .= "Content-Transfer-Encoding: 7bit\r\n";
        $body .= $message . "\r\n";
        $body .= "--{$separator}\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"{$resumeName}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment\r\n";
        $body .= $content . "\r\n";
        $body .= "--{$separator}--";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(['success' => true, 'message' => 'Application submitted successfully.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to send application.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to upload resume.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
