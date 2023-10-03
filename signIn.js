let email=document.getElementById("email");
let password=document.getElementById("password");
let btn=document.getElementById("submitBtn");
let date=new Date();
btn.addEventListener("click",function(event){
    event.preventDefault();
    fetch("check.php",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify({
        'email' : email.value,
        'password' : password.value,
        'date':date,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        if(data['message']=="lOGGED IN SUCCESSFULLY"){
            localStorage.setItem('id',data.user['id']);
            localStorage.setItem('fname',data.user['firstName'])
            localStorage.setItem('superUserFlag',data.user['superUserFlag'])
            window.location.href='./welcome.html';
        }else{
            document.getElementById("invalidP").style.display='block';
            document.getElementById("invalidP").classList.add("invalid");
            document.getElementById("invalidP").classList.remove("valid");
            document.getElementById("invalidP").textContent=data['message'];
        }
        })
    .catch(error=>{
        alert("Error:",error);
    })
})


