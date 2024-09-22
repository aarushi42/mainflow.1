<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hash the password

    // Check if the username or email already exists
    $check = "SELECT * FROM users WHERE username='$username' OR email='$email'";
    $result = $conn->query($check);

    if ($result->num_rows > 0) {
        echo "Username or Email already exists. Please try again.";
    } else {
        // Insert the new user into the database
        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
        
        if ($conn->query($sql) === TRUE) {
            echo "Registration successful! You can now login.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
}
?>
