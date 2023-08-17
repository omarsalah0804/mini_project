<?php 
$server="localhost";
$username="root";
$password="";
$dbName="see";

$conn = new mysqli($server , $username , $password , $dbName);
if($conn->connect_error){
    die("Connection Faild: ".$conn->connect_error);
}
?>