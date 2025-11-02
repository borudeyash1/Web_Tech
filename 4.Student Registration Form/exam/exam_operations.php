<?php
$conn = mysqli_connect("localhost", "root", "", "student_registration");

// If save button clicked
if(isset($_POST['save'])) {
    $id = $_POST['id'];
    $prn = $_POST['prn'];
    $name = $_POST['name'];
    $rollno = $_POST['rollno'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    
    // If id exists, update; else insert
    if($id) {
        $query = "UPDATE students SET 
            prn='$prn',
            name='$name',
            rollno='$rollno',
            email='$email',
            address='$address'
            WHERE id=$id";
    } else {
        $query = "INSERT INTO students (prn, name, rollno, email, address)
            VALUES ('$prn', '$name', '$rollno', '$email', '$address')";
    }
    
    mysqli_query($conn, $query);
    header('Location: exam.php');
}

// If delete button clicked
if(isset($_POST['delete'])) {
    $id = $_POST['id'];
    mysqli_query($conn, "DELETE FROM students WHERE id=$id");
    header('Location: exam.php');
}

// If edit button clicked
if(isset($_POST['edit'])) {
    $id = $_POST['id'];
    $result = mysqli_query($conn, "SELECT * FROM students WHERE id=$id");
    $row = mysqli_fetch_array($result);
    // Return to form with data
    echo "<script>
        document.getElementsByName('id')[0].value = '".$row['id']."';
        document.getElementsByName('prn')[0].value = '".$row['prn']."';
        document.getElementsByName('name')[0].value = '".$row['name']."';
        document.getElementsByName('rollno')[0].value = '".$row['rollno']."';
        document.getElementsByName('email')[0].value = '".$row['email']."';
        document.getElementsByName('address')[0].value = '".$row['address']."';
    </script>";
}
?>