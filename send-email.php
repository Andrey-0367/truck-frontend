<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = htmlspecialchars($data['name'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $message = htmlspecialchars($data['message'] ?? '');
    
    $to = "info@pdtrans.ru";
    $subject = "Новая заявка с сайта PalladiumTrans";
    
    $email_body = "
    <html>
    <head>
        <title>Новая заявка</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background-color: #f4f4f4;
                padding: 20px;
                text-align: center;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f9f9f9;
                border-left: 4px solid #4CAF50;
            }
            .field strong {
                color: #555;
            }
            .footer {
                margin-top: 20px;
                padding: 10px;
                text-align: center;
                font-size: 12px;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class='header'>
            <h1>Новая заявка с сайта PalladiumTrans</h1>
        </div>
        
        <div class='field'>
            <strong>Имя:</strong> {$name}
        </div>
        
        <div class='field'>
            <strong>Телефон:</strong> {$phone}
        </div>
        
        <div class='field'>
            <strong>Email:</strong> {$email}
        </div>
        
        <div class='field'>
            <strong>Сообщение:</strong><br>{$message}
        </div>
        
        <div class='footer'>
            <p>Дата отправки: " . date('d.m.Y H:i') . "</p>
        </div>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: no-reply@palladiumtrans.ru\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    
    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Сообщение отправлено']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Ошибка отправки']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>