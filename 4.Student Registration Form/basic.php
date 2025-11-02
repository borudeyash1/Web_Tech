<!DOCTYPE html>
<html>
<head><title>Student CRUD</title></head>
<body>
    <form method="post" action="crud.php">
        <input type="hidden" name="id">
        PRN: <input type="text" name="prn" required><br><br>
        Name: <input type="text" name="name" required><br><br>
        Roll No: <input type="text" name="rollno" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        Address: <input type="text" name="address" required><br><br>
        <input type="submit" name="save" value="Save">
        <input type="submit" name="clear" value="Clear">
    </form>

    <h3>Students List</h3>
    <?php
    // Display students in table
    include 'crud.php';
    $result = mysqli_query($conn, "SELECT * FROM students");
    
    if($result->num_rows > 0) {
        echo "<table border='1'>
        <tr>
            <th>PRN</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>";

        while($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>".$row['prn']."</td>";
            echo "<td>".$row['name']."</td>";
            echo "<td>".$row['rollno']."</td>";
            echo "<td>".$row['email']."</td>";
            echo "<td>".$row['address']."</td>";
            echo "<td>
                <form method='post' action='crud.php' style='display:inline'>
                    <input type='hidden' name='id' value='".$row['id']."'>
                    <input type='submit' name='edit' value='Edit'>
                    <input type='submit' name='delete' value='Delete'>
                </form>
                </td>";
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>
</body>
</html>