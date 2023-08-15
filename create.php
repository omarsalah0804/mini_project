<?php
// require("conn.php");

// header("Content-Type: application/json");
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $data = json_decode(file_get_contents("php://input"), true);

//     $userFname = $data['fname'];
//     $userMname = $data['mname'];
//     $userLname = $data['lname'];
//     $userFamilyname = $data['familyname'];
//     $userEmail = $data['email'];
//     $userPassword = $data['password'];
//     $userMobile = $data['mobile'];

//     $sql = "INSERT INTO soo (`firstName`, `MiddleName`, `LastName`, `familyname`, `email`, `password`, `mobile`) VALUES 
//             ('$userFname', '$userMname', '$userLname', '$userFamilyname', '$userEmail', '$userPassword', '$userMobile')";

//     $response = array();
//     if ($conn->query($sql) === true) {
//         $response['message'] = "Data stored successfully";
//     } else {
//         $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
//     }

//     echo json_encode($response);
// }

// $conn->close();
?> 
