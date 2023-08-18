<?php

require("./conn.php");

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);

    $response=array();
    $query="SELECT * FROM `soo`";
    $result=$conn->query($query);
    if($result->num_rows > 0){
            while($row=$result->fetch_assoc()){
                $response[]=$row;
            
            }
      
    }

    echo json_encode($response);
}
$conn->close();



?>