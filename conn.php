<?php
// $serverName = "localhost";
// $userName = "root";
// $password = "";
// $database = "see";

// $fname=$_POST["fname"];
// $mname=$_POST["mname"];
// $lname=$_POST["lname"];
// $familyname=$_POST["familyname"];
// $email=$_POST["email"];
// $mobile=$_POST["mobile"];
// $password=$_POST["password"];
// $dobday=$_POST["dobday"];
// $dobmonth=$_POST["dobmonth"];
// $dobyear=$_POST["dobyear"];

// $conn = new mysqli($serverName, $userName, $password, $database);
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }else{
//     $stmt=$conn->prepare("insert into soo(fname,mname,lname,familyname,
//     email,mobile,password,dobday,dobmonth,dobyear)
//     values(? ,? ,? ,? ,? ,? ,? ,? ,? ,?)");
//     $stmt->bind_param("ssssssssss",$fname,$mname,$lname,$familyname,
//     $email,$mobile,$password,$dobday,$dobmonth,$dobyear);
//     $stmt->execute();
//     echo"good";
//     $stmt->close();
//     $conn->close();
// }
error_reporting(E_ALL);
ini_set('display_errors', 1);


$serverName = "localhost";
$userName = "root";
$password = "";
$database = "see";

$fname = $_POST["fname"];
$mname = $_POST["mname"];
$lname = $_POST["lname"];
$familyname = $_POST["family-name"]; // Updated key
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$password = $_POST["password"];
$dobday = $_POST["dob-day"]; // Updated key
$dobmonth = $_POST["dob-month"]; // Updated key
$dobyear = $_POST["dob-year"]; // Updated key

$conn = new mysqli($serverName, $userName, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO soo (`fname`, `mname`, `lname`, `familyname`,
    `email`, `mobile`, `password`, `dob-day`, `dob-month`, `dob-year`)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $fname, $mname, $lname, $familyname,
    $email, $mobile, $password, $dobday, $dobmonth, $dobyear);
    $stmt->execute();
    echo "good";
    $stmt->close();
    $conn->close();
}
?>

