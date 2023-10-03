<?php
require("./connect.php");
header("Content-Type: application/json");


if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $firstName=$data['firstName'];
    $middleName=$data['middleName'];
    $lastName=$data['lastName'];
    $familyName=$data['familyName'];
    $email=$data['email'];
    $mobile=$data['mobile'];
    $password=$data['password'];
    $bdate=$data['bdate'];
    
    $response=array();
    $query="SELECT * FROM `soo` WHERE `email`='$email'";
    $result=$conn->query($query);
    if($result->num_rows == 0){
       $sql="INSERT INTO `soo`(`firstName`, `middleName`, `lastName`, `familyName`, `email`, `mobile`, `password`, `bDate` , `superUserFlag`) 
        VALUES ('$firstName','$middleName','$lastName','$familyName','$email','$mobile','$password','$bdate',0)";
    
        if($conn->query($sql)===true){
            $response['message']="Data stored successfully";
        }else{
            $response['message']="Error: ".$sql."<br".$conn->error;
        }
        echo json_encode($response);
    }else{
        $response['message']="Email Not Valid";
        echo json_encode($response);
    }
}
$conn->close();
?>