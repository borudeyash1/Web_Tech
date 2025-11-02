<?php
header('Content-Type: application/json');

// Database connection
$host = 'localhost';
$dbname = 'student_registration';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $e->getMessage()]));
}

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

// Read JSON input
$data = json_decode(file_get_contents('php://input'), true);

switch($method) {
    case 'GET':
        // Read all students
        try {
            $stmt = $pdo->query('SELECT * FROM students');
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        } catch(PDOException $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Error fetching students: ' . $e->getMessage()]);
        }
        break;

    case 'POST':
        // Create new student
        try {
            $sql = 'INSERT INTO students (prn, name, rollno, email, address) VALUES (?, ?, ?, ?, ?)';
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$data['prn'], $data['name'], $data['rollno'], $data['email'], $data['address']]);
            echo json_encode(['success' => true, 'message' => 'Student added successfully']);
        } catch(PDOException $e) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Error adding student: ' . $e->getMessage()]);
        }
        break;

    case 'PUT':
        // Update existing student
        try {
            $sql = 'UPDATE students SET prn=?, name=?, rollno=?, email=?, address=? WHERE id=?';
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$data['prn'], $data['name'], $data['rollno'], $data['email'], $data['address'], $data['id']]);
            echo json_encode(['success' => true, 'message' => 'Student updated successfully']);
        } catch(PDOException $e) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Error updating student: ' . $e->getMessage()]);
        }
        break;

    case 'DELETE':
        // Delete student
        try {
            $sql = 'DELETE FROM students WHERE id = ?';
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$data['id']]);
            echo json_encode(['success' => true, 'message' => 'Student deleted successfully']);
        } catch(PDOException $e) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Error deleting student: ' . $e->getMessage()]);
        }
        break;
}
?>