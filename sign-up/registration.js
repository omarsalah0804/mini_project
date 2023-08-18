let userObject={};
let firstNameFlag=0;
let middleNameFlag=0;
let lastNameFlag=0;
let familyNameFlag=0;
let emailFlag=0;
let mobileFlag=0;
let passwordFlag=0;
let confPasswordFlag=0;
let bdateFlag=0;

let up=0;
let lw=0;
let nm=0;
let lg=0;


//.....................first name.............. //
//.....................first name.............. //
//.....................first name.............. //

let firstName=document.getElementById("fname");
firstName.addEventListener("focus",function(){
    document.getElementById("fnameP").style.display="block";
})
firstName.addEventListener("blur",function(){
    document.getElementById("fnameP").style.display="none";
})
firstName.addEventListener("keyup",function(){
    let fNameRE=/[a-zA-Z]{1,}/g;
    if(firstName.value.match(fNameRE)==firstName.value){
        document.getElementById("fnameP").classList.remove("invalid");
        document.getElementById("fnameP").classList.add("valid");
        firstNameFlag=1;
    }else{
        document.getElementById("fnameP").classList.remove("valid");
        document.getElementById("fnameP").classList.add("invalid");
    }
})

//.....................middle name.............. //
//.....................middle name.............. //
//.....................middle name.............. //

let middleName=document.getElementById("mname");
middleName.addEventListener("focus",function(){
    document.getElementById("mnameP").style.display="block";
})
middleName.addEventListener("blur",function(){
    document.getElementById("mnameP").style.display="none";
})
middleName.addEventListener("keyup",function(){
    let mNameRE=/[a-zA-Z]{1,}/g;
    if(middleName.value.match(mNameRE)==middleName.value){
        document.getElementById("mnameP").classList.remove("invalid");
        document.getElementById("mnameP").classList.add("valid");
        middleNameFlag=1;
    }else{
        document.getElementById("mnameP").classList.remove("valid");
        document.getElementById("mnameP").classList.add("invalid");
    }
})

//.....................last name.............. //
//.....................last name.............. //
//.....................last name.............. //

let lastName=document.getElementById("lname");
lastName.addEventListener("focus",function(){
    document.getElementById("lnameP").style.display="block";
})
lastName.addEventListener("blur",function(){
    document.getElementById("lnameP").style.display="none";
})
lastName.addEventListener("keyup",function(){
    let lNameRE=/[a-zA-Z]{1,}/g;
    if(lastName.value.match(lNameRE)==lastName.value){
        document.getElementById("lnameP").classList.remove("invalid");
        document.getElementById("lnameP").classList.add("valid");
        lastNameFlag=1;
    }else{
        document.getElementById("lnameP").classList.remove("valid");
        document.getElementById("lnameP").classList.add("invalid");
    }
})

//.....................family name.............. //
//.....................family name.............. //
//.....................family name.............. //

let familyName=document.getElementById("family");
familyName.addEventListener("focus",function(){
    document.getElementById("famnameP").style.display="block";
})
familyName.addEventListener("blur",function(){
    document.getElementById("famnameP").style.display="none";
})
familyName.addEventListener("keyup",function(){
    let famNameRE=/[a-zA-Z]{1,}/g;
    if(familyName.value.match(famNameRE)==familyName.value){
        document.getElementById("famnameP").classList.remove("invalid");
        document.getElementById("famnameP").classList.add("valid");
        familyNameFlag=1;
    }else{
        document.getElementById("famnameP").classList.remove("valid");
        document.getElementById("famnameP").classList.add("invalid");
    }
})

//.....................Email.............. //
//.....................Email.............. //
//.....................Email.............. //

let email=document.getElementById("email");
email.addEventListener("focus",function(){
    document.getElementById("emailP").style.display="block";
})
email.addEventListener("blur",function(){
    document.getElementById("emailP").style.display="none";
})
email.addEventListener("keyup",function(){
    let emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // let matchResult=email.value.match(emailRE);
    if(email.value.match(emailRE)){
        document.getElementById("emailP").classList.remove("invalid");
        document.getElementById("emailP").classList.add("valid");
        emailFlag=1;
    }else{
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }
    
})

//.....................Mobile.............. //
//.....................Mobile.............. //
//.....................Mobile.............. //

let mobile=document.getElementById("mobile");
mobile.addEventListener("focus",function(){
    document.getElementById("mobileNumP").style.display="block";
})
mobile.addEventListener("blur",function(){
    document.getElementById("mobileNumP").style.display="none";
})
mobile.addEventListener("keyup",function(){
    let mobileRE=/^\d{14}$/;
    // let matchResult=email.value.match(emailRE);
    if(mobile.value.match(mobileRE)){
        document.getElementById("mobileNumP").classList.remove("invalid");
        document.getElementById("mobileNumP").classList.add("valid");
        mobileFlag=1;
    }else{
        document.getElementById("mobileNumP").classList.remove("valid");
        document.getElementById("mobileNumP").classList.add("invalid");
    }
    
})

//.....................Password.............. //
//.....................Password.............. //
//.....................Password.............. //

let password=document.getElementById("password");
password.addEventListener("focus",function(){
    document.getElementById("capitalPass").style.display="block";
    document.getElementById("letterPass").style.display="block";
    document.getElementById("numberPass").style.display="block";
    document.getElementById("lengthPass").style.display="block";
})
password.addEventListener("blur",function(){
    document.getElementById("capitalPass").style.display="none";
    document.getElementById("letterPass").style.display="none";
    document.getElementById("numberPass").style.display="none";
    document.getElementById("lengthPass").style.display="none";
})
password.addEventListener("keyup",function(){    
    var upperCaseLetters = /([A-Z])/g;
    if(password.value.match(upperCaseLetters)) {  
        capitalPass.classList.remove("invalid");
        capitalPass.classList.add("valid");
        up=1;
    } else {
        capitalPass.classList.remove("valid");
        capitalPass.classList.add("invalid");
    }
    var lowerCaseLetters = /(?=.*[a-z])/g;
    if(password.value.match(lowerCaseLetters)) {  
        letterPass.classList.remove("invalid");
        letterPass.classList.add("valid");
        lw=1;
    } else {
        letterPass.classList.remove("valid");
        letterPass.classList.add("invalid");
    }
    var numbers = /(?=.*\d)/g;
    if(password.value.match(numbers)) {  
        numberPass.classList.remove("invalid");
        numberPass.classList.add("valid");
        nm=1;
    } else {
        numberPass.classList.remove("valid");
        numberPass.classList.add("invalid");
    }
   
    if(password.value.length >= 8 && password.value.length<=32) {
        lengthPass.classList.remove("invalid");
        lengthPass.classList.add("valid");
        lg=1;
    } else {
        lengthPass.classList.remove("valid");
        lengthPass.classList.add("invalid");
    }if(up && lw && nm  && lg){
        passwordFlag=1;
    }
})

//.....................Confirm Password.............. //
//.....................Confirm Password.............. //
//.....................Confirm Password.............. //

let confPassword=document.getElementById("confPassword");
confPassword.addEventListener("focus",function(){
    document.getElementById("confPassP").style.display="block";
})
confPassword.addEventListener("blur",function(){
    document.getElementById("confPassP").style.display="none";
})
confPassword.addEventListener("keyup",function(){
    if(password.value===confPassword.value){
        document.getElementById("confPassP").classList.remove("invalid");
        document.getElementById("confPassP").classList.add("valid");
        confPasswordFlag=1;
    }else{
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
    }
})

//....................BirthDate.............. //
//....................BirthDate.............. //
//....................BirthDate.............. //

let bdate=document.getElementById("bdate");
bdate.addEventListener("blur",function(){
    document.getElementById("dateP").style.display='none';
});
bdate.addEventListener("change",function(){
    let birthDate=document.getElementById("bdate").value;
    birthDate=new Date(birthDate);//convert from string to obj
    totalAge=Date.now()-birthDate.getTime();//mill second
    console.log(typeof(totalAge/1000/60/60/24));
    ageyear=new Date (totalAge);//convert millsecond to date start from 1970
    ageyear=Math.abs(ageyear.getUTCFullYear()-1970);
    // console.log(ageyear);
    if(ageyear<16){
        document.getElementById("dateP").style.display='block';
        dateP.classList.remove("valid");
        dateP.classList.add("invalid");
    }else{
        document.getElementById("dateP").style.display='block';
        dateP.classList.remove("invalid");
        dateP.classList.add("valid");
        bdateFlag=1;
    }
})

//....................Submit.............. //
//....................Submit.............. //
//....................Submit.............. //

let btn=document.getElementById("submitBtn");
btn.addEventListener("click",function(event){

    if(firstNameFlag ==0){
        event.preventDefault();
        document.getElementById("fnameP").style.display="block";
        document.getElementById("fnameP").classList.remove("valid");
        document.getElementById("fnameP").classList.add("invalid");
    }
    if(middleNameFlag ==0){
        event.preventDefault();
        document.getElementById("mnameP").style.display="block";
        document.getElementById("mnameP").classList.remove("valid");
        document.getElementById("mnameP").classList.add("invalid");
    }
    if(lastNameFlag ==0){
        event.preventDefault();
        document.getElementById("lnameP").style.display="block";
        document.getElementById("lnameP").classList.remove("valid");
        document.getElementById("lnameP").classList.add("invalid");
    }
    if(familyNameFlag ==0){
        event.preventDefault();
        document.getElementById("famnameP").style.display="block";
        document.getElementById("famnameP").classList.remove("valid");
        document.getElementById("famnameP").classList.add("invalid");
    }
    if(emailFlag ==0){
        event.preventDefault();
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }
    if(mobileFlag ==0){
        event.preventDefault();
        document.getElementById("mobileNumP").style.display="block";
        document.getElementById("mobileNumP").classList.remove("valid");
        document.getElementById("mobileNumP").classList.add("invalid");
    }
    if(passwordFlag==0){
        event.preventDefault();
        document.getElementById("capitalPass").style.display="block";
        document.getElementById("letterPass").style.display="block";
        document.getElementById("numberPass").style.display="block";
        document.getElementById("lengthPass").style.display="block";
    }
    if(confPasswordFlag==0){
        event.preventDefault();
        document.getElementById("confPassP").style.display="block";
    }
    if(bdateFlag==0){
        event.preventDefault();
        document.getElementById("dateP").style.display="block";
    }
    if(firstNameFlag && middleNameFlag && lastNameFlag && familyNameFlag && emailFlag && mobileFlag && passwordFlag && confPasswordFlag && bdateFlag ){
        event.preventDefault();
        bdate=new Date(bdate.value);
        fetch("../create.php",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({'firstName' : firstName.value,
            middleName : middleName.value,
            lastName : lastName.value,
            familyName : familyName.value,
            email : email.value,
            mobile :mobile.value,
            password : password.value,
            bdate : bdate,
        }),
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.message=="Email Not Valid"){
                document.getElementById("notValidP").textContent="Email Not Valid";
                document.getElementById("notValidP").style.display="block";
            }else{
                firstName.value="";
                middleName.value="";
                lastName.value="";
                familyName.value="";
                email.value="";
                mobile.value="";
                password.value="";
                window.location.href="../sign-in/sign-in.html";
            }
        })
        .catch(error=>{
            console.error("Error:",error);
        })
    }
})