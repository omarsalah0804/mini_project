let userObject = {};
let firstNameFlag = 0;
let MiddleNameFlag = 0;
let LastNameFlag = 0;
let familynameFlag = 0;
let emailFlag = 0;
let MobileFlag = 0;
let passwordFlag = 0;
let confPasswordFlag = 0;


let up = 0;
let lw = 0;
let nm = 0;
let lg = 0;


//first name field
let firstName = document.getElementById("fname");
firstName.addEventListener("focus", function () {
    document.getElementById("fNameP").style.display = "block";
})
firstName.addEventListener("blur", function () {
    document.getElementById("fNameP").style.display = "none";
})
firstName.addEventListener("keyup", function () {
    let fNameRE = /[a-zA-Z]{3,}/g;
    console.log(firstName.value.match(fNameRE) == firstName.value);
    if (firstName.value.match(fNameRE) == firstName.value) {
        document.getElementById("fNameP").classList.remove("invalid");
        document.getElementById("fNameP").classList.add("valid");
        firstNameFlag = 1;
    } else {
        document.getElementById("fNameP").classList.remove("valid");
        document.getElementById("fNameP").classList.add("invalid");
    }
})

let MiddleName = document.getElementById("mname");
MiddleName.addEventListener("focus", function () {
    document.getElementById("mNameP").style.display = "block";
})
MiddleName.addEventListener("blur", function () {
    document.getElementById("mNameP").style.display = "none";
})
MiddleName.addEventListener("keyup", function () {
    let mNameRE = /[a-zA-Z]{3,}/g;
    if (MiddleName.value.match(mNameRE) == MiddleName.value) {
        document.getElementById("mNameP").classList.remove("invalid");
        document.getElementById("mNameP").classList.add("valid");
        MiddleNameFlag = 1;
    } else {
        document.getElementById("mNameP").classList.remove("valid");
        document.getElementById("mNameP").classList.add("invalid");
    }
})



let LastName = document.getElementById("lname");
LastName.addEventListener("focus", function () {
    document.getElementById("lNameP").style.display = "block";
})
LastName.addEventListener("blur", function () {
    document.getElementById("lNameP").style.display = "none";
})
LastName.addEventListener("keyup", function () {
    let lNameRE = /[a-zA-Z]{3,}/g;
    if (LastName.value.match(lNameRE) == LastName.value) {
        document.getElementById("lNameP").classList.remove("invalid");
        document.getElementById("lNameP").classList.add("valid");
        LastNameFlag = 1;
    } else {
        document.getElementById("lNameP").classList.remove("valid");
        document.getElementById("lNameP").classList.add("invalid");
    }
})

//last name field
let familyname = document.getElementById("familyname");
familyname.addEventListener("focus", function () {
    document.getElementById("faNameP").style.display = "block";
})
familyname.addEventListener("blur", function () {
    document.getElementById("faNameP").style.display = "none";
})
familyname.addEventListener("keyup", function () {
    let faNameRE = /[a-zA-Z]{3,}/g;
    if (familyname.value.match(faNameRE) == familyname.value) {
        document.getElementById("faNameP").classList.remove("invalid");
        document.getElementById("faNameP").classList.add("valid");
        familynameFlag = 1;
    } else {
        document.getElementById("faNameP").classList.remove("valid");
        document.getElementById("faNameP").classList.add("invalid");
    }
})


//Email field
let email = document.getElementById("email");
email.addEventListener("focus", function () {
    document.getElementById("emailP").style.display = "block";
})
email.addEventListener("blur", function () {
    document.getElementById("emailP").style.display = "none";
})
email.addEventListener("keyup", function () {
    let emailRE = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // let matchResult=email.value.match(emailRE);
    if (email.value.match(emailRE)) {
        document.getElementById("emailP").classList.remove("invalid");
        document.getElementById("emailP").classList.add("valid");
        emailFlag = 1;
    } else {
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }

})



let Mobile = document.getElementById("mobile");
Mobile.addEventListener("focus", function () {
    document.getElementById("mobilep").style.display = "block";
})
Mobile.addEventListener("blur", function () {
    document.getElementById("mobilep").style.display = "none";
})
Mobile.addEventListener("keyup", function () {
    let MobileRE = /[0-9]{14}/;
    // let matchResult=email.value.match(emailRE);
    if (Mobile.value.match(MobileRE)) {
        document.getElementById("mobilep").classList.remove("invalid");
        document.getElementById("mobilep").classList.add("valid");
        MobileFlag = 1;
    } else {
        document.getElementById("mobilep").classList.remove("valid");
        document.getElementById("mobilep").classList.add("invalid");
    }

})





//Password field
let password = document.getElementById("password");
password.addEventListener("focus", function () {
    document.getElementById("capitalPass").style.display = "block";
    document.getElementById("letterPass").style.display = "block";
    document.getElementById("numberPass").style.display = "block";
    document.getElementById("lengthPass").style.display = "block";
})
password.addEventListener("blur", function () {
    document.getElementById("capitalPass").style.display = "none";
    document.getElementById("letterPass").style.display = "none";
    document.getElementById("numberPass").style.display = "none";
    document.getElementById("lengthPass").style.display = "none";
})
password.addEventListener("keyup", function () {
    // let passwordRE=/(^[A-Z])(?=.*\d)(?=.*[a-z]).{8,32}/g;

    var upperCaseLetters = /([A-Z])/g;
    if (password.value.match(upperCaseLetters)) {
        capitalPass.classList.remove("invalid");
        capitalPass.classList.add("valid");
        up = 1;
    } else {
        capitalPass.classList.remove("valid");
        capitalPass.classList.add("invalid");
    }
    var lowerCaseLetters = /(?=.*[a-z])/g;
    if (password.value.match(lowerCaseLetters)) {
        letterPass.classList.remove("invalid");
        letterPass.classList.add("valid");
        lw = 1;
    } else {
        letterPass.classList.remove("valid");
        letterPass.classList.add("invalid");
    }
    var numbers = /(?=.*\d)/g;
    if (password.value.match(numbers)) {
        numberPass.classList.remove("invalid");
        numberPass.classList.add("valid");
        nm = 1;
    } else {
        numberPass.classList.remove("valid");
        numberPass.classList.add("invalid");
    }
    if (password.value.length >= 8 && password.value.length <= 32) {
        lengthPass.classList.remove("invalid");
        lengthPass.classList.add("valid");
        lg = 1;
    } else {
        lengthPass.classList.remove("valid");
        lengthPass.classList.add("invalid");
    } if (up && lw && nm && lg) {
        passwordFlag = 1;
    }
})

//confirm Password field
let confPassword = document.getElementById("password-confirm");
confPassword.addEventListener("focus", function () {
    document.getElementById("confPassP").style.display = "block";
})
confPassword.addEventListener("blur", function () {
    document.getElementById("confPassP").style.display = "none";
})
confPassword.addEventListener("keyup", function () {
    if (password.value === confPassword.value) {
        console.log("valid");
        document.getElementById("confPassP").classList.remove("invalid");
        document.getElementById("confPassP").classList.add("valid");
        confPasswordFlag = 1;
    } else {
        console.log("in-valid");
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
    }
})


function validateForm() {
    // Placeholder validation logic for demonstration
    const dobDay = parseInt(document.getElementById('dobday').value);
    const dobMonth = parseInt(document.getElementById('dobmonth').value);
    const dobYear = parseInt(document.getElementById('dobyear').value);

    // ... Other field validations ...

    // Calculate current date and birth date
    const currentDate = new Date();
    const birthDate = new Date(dobYear, dobMonth - 1, dobDay); // Month is 0-indexed

    // Calculate age
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);

    if (ageInYears < 16) {
        document.getElementById('dob-error').textContent = 'You must be at least 16 years old to register';
        return;
    }
}

//submit Button
let ButtonSubmit = document.getElementById("buttonID");
ButtonSubmit.addEventListener("click", function (event) {
    if (firstNameFlag == 0) {
        event.preventDefault();
        document.getElementById("fNameP").style.display = "block";
        document.getElementById("fNameP").classList.remove("valid");
        document.getElementById("fNameP").classList.add("invalid");
    }
    if (MiddleNameFlag == 0) {
        event.preventDefault();
        document.getElementById("mNameP").style.display = "block";
        document.getElementById("mNameP").classList.remove("valid");
        document.getElementById("mNameP").classList.add("invalid");
    }
    if (LastNameFlag == 0) {
        event.preventDefault();
        document.getElementById("lNameP").style.display = "block";
        document.getElementById("lNameP").classList.remove("valid");
        document.getElementById("lNameP").classList.add("invalid");
    }
    if (familynameFlag == 0) {
        event.preventDefault();
        document.getElementById("faNameP").style.display = "block";
        document.getElementById("faNameP").classList.remove("valid");
        document.getElementById("faNameP").classList.add("invalid");
    }
    if (emailFlag == 0) {
        event.preventDefault();
        document.getElementById("emailP").style.display = "block";
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }
    if (MobileFlag == 0) {
        event.preventDefault();
        document.getElementById("mobilep").style.display = "block";
        document.getElementById("mobilep").classList.remove("valid");
        document.getElementById("mobilep").classList.add("invalid");
    }
    if (passwordFlag == 0) {
        event.preventDefault();
        document.getElementById("capitalPass").style.display = "block";
        document.getElementById("letterPass").style.display = "block";
        document.getElementById("numberPass").style.display = "block";
        document.getElementById("lengthPass").style.display = "block";
    }
    if (confPasswordFlag == 0) {
        event.preventDefault();
        document.getElementById("confPassP").style.display = "block";
    }
    // if (firstNameFlag && MiddleNameFlag && LastNameFlag && familynameFlag && emailFlag && MobileFlag &&
    //     passwordFlag && confPasswordFlag)
    //     window.location.href="../sign-in/sign-in.html";
    //     event.preventDefault();


    if (firstNameFlag && MiddleNameFlag && LastNameFlag && familynameFlag && emailFlag && MobileFlag &&
        passwordFlag && confPasswordFlag) {
        window.location.href="../sign-in/sign-in.html";
    }
    event.preventDefault();
    
        
    })

    // fetch("create.php", {

    //     method: "POST",
    //     headers: {

    //         "Content-Type": "application/json",
    //     },

    //     body: JSON.stringify({
    //         fname: firstName.value, mname: MiddleName.value,
    //         lname: LastName.value, familyname: familyname.value, email: email.value,
    //         mobile: Mobile.value, password: password.value,
    //     })

    // })
    //         .then(response => response.json())
    //         .then(data => {

    //             alert(data.message);

    //             firstName, value = "";
    //             MiddleName, value = "";

    //             LastName.value = "";

    //             familyname, value = "";

    //             email, value = "";

    //             Mobile.value = "";
    //             password, value = "";
    //         })
    //         .catch(error => {
    //             console.error("Error:", error);
    // })
    // // window.location.href="../sign-in/sign-in.html";