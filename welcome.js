let fname=localStorage.getItem('fname');
let id=localStorage.getItem('id');
let flag=localStorage.getItem('superUserFlag');
document.querySelector('h1').textContent="Welcome "+fname;
let superDiv=document.getElementById("superUserDiv");
let table=document.getElementById("tbl");
if(flag==0){
    fetch("read.php",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify({
        id:id,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("userdiv").style.display='block';
        document.getElementById("nameP").textContent="Full Name : " + data.user['firstName'] + " " + data.user['middleName'] + " " + data.user['lastName'] + " " + data.user['familyName'];
        document.getElementById("emailP").textContent="Email : " + data.user['email'];
        document.getElementById("mobileP").textContent="Mobile : +" + data.user['mobile'];
        })
    .catch(error=>{
        alert("Error:",error);
    })
}else {
    fetch("readSuperAdmin.php",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify({
        // id:id,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        
        data.map(element => {
            //................ div view ...............
            document.getElementById("superUserDiv").style.display='block';
            let userDiv = document.createElement('div');
            let idP = document.createElement('p');
            let nameP = document.createElement('p');
            let emailP = document.createElement('p');
            let passwordP = document.createElement('p');
            let birthDateP = document.createElement('p');
            // let createDateP = document.createElement('p');
            let lastLoginP = document.createElement('p');

            idP.textContent ="ID : " + element['id'];
            nameP.textContent ="Name : " +  element['firstName'] + " " + element['middleName'] + " " + element['lastName'] + " " + element['familyName'];
            emailP.textContent="Email : " + element['email'];
            passwordP.textContent="Password : " + element['password'];
            birthDateP.textContent="BirthDate : " + element['bDate'];
            // createDateP.textContent="Create Date : " + element['createDate'];
            lastLoginP.textContent="Last Login : " + element['lastLogin'];

            userDiv.appendChild(idP);
            userDiv.appendChild(nameP);
            userDiv.appendChild(emailP);
            userDiv.appendChild(passwordP);
            userDiv.appendChild(birthDateP);
            // userDiv.appendChild(createDateP);
            userDiv.appendChild(lastLoginP);
            superDiv.appendChild(userDiv);
            userDiv.style.border='2px solid white';
            userDiv.style.padding='5px';
            userDiv.style.margin='20px auto';
            userDiv.style.textShadow='1px 1px 6px black';
            userDiv.style.boxShadow='1px 1px 20px black';
            userDiv.style.borderRadius='17px';
            
            //.................table view...............
            // let userRow = document.createElement('tr');
            // let idD = document.createElement('td');
            // let nameD = document.createElement('td');
            // let emailD = document.createElement('td');
            // let passwordD = document.createElement('td');
            // let birthDateD = document.createElement('td');
            // let createDateD = document.createElement('td');
            // let lastLoginD = document.createElement('td');

            // idD.textContent =element['id'];
            // nameD.textContent =element['firstName'] + " " + element['middleName'] + " " + element['lastName'] + " " + element['familyName'];
            // emailD.textContent=element['email'];
            // passwordD.textContent=element['password'];
            // birthDateD.textContent=element['bDate'];
            // createDateD.textContent=element['createDate'];
            // lastLoginD.textContent=element['lastLogin'];

            // userRow.appendChild(idD);
            // userRow.appendChild(nameD);
            // userRow.appendChild(emailD);
            // userRow.appendChild(passwordD);
            // userRow.appendChild(birthDateD);
            // userRow.appendChild(createDateD);
            // userRow.appendChild(lastLoginD);
            // table.appendChild(userRow);
        })
        // document.getElementById("userdiv").style.display='block';
        // document.getElementById("nameP").textContent="Full Name : " + data.user['firstName'] + " " + data.user['middleName'] + " " + data.user['lastName'] + " " + data.user['familyName'];
        // document.getElementById("emailP").textContent="Email : " + data.user['email'];
        // document.getElementById("mobileP").textContent="Mobile : +" + data.user['mobile'];
        })
    .catch(error=>{
        alert("Error:",error);
    })
}