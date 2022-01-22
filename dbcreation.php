<?php 
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//creating DB
$sql = "USE MYWEBSITE";
if($conn->query($sql)!=TRUE){
    echo "Error connecting to database: ", $conn->error;
} /*
$sql = "CREATE TABLE MYMESSAGES( senderName varchar(32) not null, email varchar(100) not null, 
        mymsg varchar(500) not null, sentTime timestamp default CURRENT_TIMESTAMP)";
if($conn->query($sql)!=TRUE){
    echo "Error in connecting to table: ", $conn->error;
}*/
$conn->close();
?>