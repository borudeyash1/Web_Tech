<?php
// Connect to database
$conn = new PDO("mysql:host=localhost;dbname=student_registration", "root", "");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);

// Handle different requests
switch($method) {
    case 'GET':
        // Read all
        $stmt = $conn->query("SELECT * FROM students");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'POST':
        // Create
        $sql = "INSERT INTO students (prn, name, rollno, email, address) VALUES (?,?,?,?,?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$data['prn'], $data['name'], $data['rollno'], $data['email'], $data['address']]);
        echo json_encode(['success' => true, 'message' => 'Added successfully']);
        break;

    case 'PUT':
        // Update
        $sql = "UPDATE students SET prn=?, name=?, rollno=?, email=?, address=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$data['prn'], $data['name'], $data['rollno'], $data['email'], $data['address'], $data['id']]);
        echo json_encode(['success' => true, 'message' => 'Updated successfully']);
        break;

    case 'DELETE':
        // Delete
        $stmt = $conn->prepare("DELETE FROM students WHERE id = ?");
        $stmt->execute([$data['id']]);
        echo json_encode(['success' => true, 'message' => 'Deleted successfully']);
        break;
}
?>