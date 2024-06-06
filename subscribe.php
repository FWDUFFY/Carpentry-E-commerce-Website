<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['emailAddress'];

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle invalid email
        echo "Invalid email address.";
        exit;
    }

    // Connect to your database
    $servername = "localhost";
    $username = "username"; // Your database username
    $password = "password"; // Your database password
    $dbname = "your_database"; // Your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if email already exists in the database
    $sql = "SELECT * FROM subscribers WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // Handle duplicate email
        echo "Email address is already subscribed.";
        $conn->close();
        exit;
    }

    // Insert data into database
    $sql = "INSERT INTO subscribers (first_name, last_name, email) VALUES ('$firstName', '$lastName', '$email')";
    if ($conn->query($sql) === TRUE) {
        echo "You have been successfully subscribed!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
