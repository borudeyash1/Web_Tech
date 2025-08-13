<?php
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = "root@1234";     // default for XAMPP
$dbname = "practice";
// Try changing to "127.0.0.1" if error persists

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo "<h2>Connection failed:</h2>";
    echo "<pre>" . $conn->connect_error . "</pre>";
    echo "<p>Try these steps:<br>1. Make sure MySQL is running in XAMPP.<br>2. Try changing 'localhost' to '127.0.0.1'.<br>3. Check your username and password.<br>4. If you changed the MySQL port, specify it in the connection.<br></p>";
    exit();
}

// Get form data
$prn = $_POST['prn'];
$name = $_POST['name'];
$rollno = $_POST['rollno'];
$email = $_POST['email'];
$address = $_POST['address'];

// Insert into database
$sql = "INSERT INTO pt1 (PRN, name, rool_no, email, address) VALUES ('$prn', '$name', '$rollno', '$email', '$address')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>Registration successful!</h2>";
    echo "<a href='1.html'>Go back to form</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
