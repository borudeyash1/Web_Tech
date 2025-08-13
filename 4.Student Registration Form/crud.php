<?php
$servername = "localhost";
$username = "root";
$password = "root@1234";
$dbname = "practice";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo "<h2>Connection failed:</h2>";
    echo "<pre>" . $conn->connect_error . "</pre>";
    exit();
}
// Message variable
$message = '';
$messageType = '';

// Handle Create
if (isset($_POST['create'])) {
    $prn = $_POST['prn'];
    $name = $_POST['name'];
    $rollno = $_POST['rollno'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $sql = "INSERT INTO pt1 (PRN, name, rool_no, email, address) VALUES ('$prn', '$name', '$rollno', '$email', '$address')";
    if ($conn->query($sql) === TRUE) {
        $message = "Registration successful!";
        $messageType = 'success';
    } else {
        $message = "Error: " . $conn->error;
        $messageType = 'error';
    }
}

// Update
if (isset($_POST['update'])) {
    $prn = $_POST['prn'];
    $name = $_POST['name'];
    $rollno = $_POST['rollno'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $sql = "UPDATE pt1 SET name='$name', rool_no='$rollno', email='$email', address='$address' WHERE PRN='$prn'";
    if ($conn->query($sql) === TRUE) {
        $message = "Record updated!";
        $messageType = 'success';
    } else {
        $message = "Error: " . $conn->error;
        $messageType = 'error';
    }
}

// Delete
if (isset($_POST['delete'])) {
    $prn = $_POST['prn'];
    $sql = "DELETE FROM pt1 WHERE PRN='$prn'";
    if ($conn->query($sql) === TRUE) {
        $message = "Record deleted!";
        $messageType = 'success';
    } else {
        $message = "Error: " . $conn->error;
        $messageType = 'error';
    }
}

//  Read
if (isset($_POST['read'])) {
    $sql = "SELECT * FROM pt1";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "<h2>All Records:</h2>";
        echo "<table border='1' style='width:100%;margin-top:20px;border-collapse:collapse;'>";
        echo "<tr style='background:#2a3d66;color:#fff;'><th>PRN</th><th>Name</th><th>Roll No</th><th>Email</th><th>Address</th><th>Actions</th></tr>";
        while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>".$row['PRN']."</td>";
            echo "<td>".$row['name']."</td>";
            echo "<td>".$row['rool_no']."</td>";
            echo "<td>".$row['email']."</td>";
            echo "<td>".$row['address']."</td>";
            echo "<td style='text-align:center;'>";
            // Update button (opens a form to update this record)
            echo "<form style='display:inline;' method='post' action='crud.php'>";
            echo "<input type='hidden' name='prn' value='".$row['PRN']."'>";
            echo "<input type='hidden' name='name' value='".$row['name']."'>";
            echo "<input type='hidden' name='rollno' value='".$row['rool_no']."'>";
            echo "<input type='hidden' name='email' value='".$row['email']."'>";
            echo "<input type='hidden' name='address' value='".$row['address']."'>";
            echo "<input type='submit' name='update_form' value='Update' style='background:#ffc107;color:#222;border:none;padding:5px 12px;border-radius:4px;cursor:pointer;margin-right:5px;'>";
            echo "</form>";
            // Delete button
            echo "<form style='display:inline;' method='post' action='crud.php' onsubmit='return confirm(\'Are you sure you want to delete this record?\');'>";
            echo "<input type='hidden' name='prn' value='".$row['PRN']."'>";
            echo "<input type='submit' name='delete' value='Delete' style='background:#dc3545;color:#fff;border:none;padding:5px 12px;border-radius:4px;cursor:pointer;'>";
            echo "</form>";
            echo "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "<h2>No records found!</h2>";
    }
}
// Show message if set
if ($message) {
    echo "<div style='max-width:500px;margin:20px auto;padding:15px;border-radius:8px;font-size:1.1em;text-align:center;";
    echo $messageType === 'success' ? "background:#ddffdd;color:#070;border:1px solid #070;" : "background:#ffdddd;color:#a00;border:1px solid #a00;";
    echo "'>" . htmlspecialchars($message) . "</div>";
}
// Show update form if requested
if (isset($_POST['update_form'])) {
    echo "<h2>Update Record</h2>";
    echo "<form method='post' action='crud.php' style='max-width:400px;margin:20px auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.07);'>";
    echo "<label>PRN (readonly)</label><input type='text' name='prn' value='".htmlspecialchars($_POST['prn'])."' readonly style='width:100%;margin-bottom:10px;'>";
    echo "<label>Name</label><input type='text' name='name' value='".htmlspecialchars($_POST['name'])."' required style='width:100%;margin-bottom:10px;'>";
    echo "<label>Roll No</label><input type='text' name='rollno' value='".htmlspecialchars($_POST['rollno'])."' required style='width:100%;margin-bottom:10px;'>";
    echo "<label>Email</label><input type='email' name='email' value='".htmlspecialchars($_POST['email'])."' required style='width:100%;margin-bottom:10px;'>";
    echo "<label>Address</label><input type='text' name='address' value='".htmlspecialchars($_POST['address'])."' required style='width:100%;margin-bottom:10px;'>";
    echo "<input type='submit' name='update' value='Update' style='background:#2a3d66;color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;'>";
    echo "</form>";
}

$conn->close();
?>
