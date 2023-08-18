<?php
require("./conn.php");

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $email=$data['email'];
    $password=$data['password'];
    $date=$data['date'];

    $response=array();
    
    $query="SELECT id ,	firstName , superUserFlag FROM `soo` WHERE `email`='$email' AND `password`='$password'";
    $result=$conn->query($query);
    if($result->num_rows > 0){
       $sql="UPDATE `soo` SET `lastLogin`='$date' WHERE `email`='$email' AND `password`='$password'";
       $updateQuery=$conn->query($sql);
            while($row=$result->fetch_assoc()){
                $response['soo']=$row;
            
            }
      
            $response['message']="lOGGED IN SUCCESSFULLY";
    }else{
        $response['message']="Email Or Password  Not Valid";
    }
    echo json_encode($response);
}
$conn->close();

?>