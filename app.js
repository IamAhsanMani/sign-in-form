//  ****************************************** signup() function code start ***************************************
function signUp() {
    var username = document.getElementById("username").value.toLowerCase();
    var email = document.getElementById("email").value.toLowerCase();
    var passWord = document.getElementById("password").value.toLowerCase();
    var confirmPassword = document.getElementById('password1').value;

    var load = document.getElementById("load");
    load.classList.remove("hide");
    
    setTimeout(function(){
        load.classList.add("hide")
        if(confirmPassword !== passWord) {
            document.getElementById('errpassword1').innerHTML = "Password does not Match";
            swal({
                title:"Password does not match",
                icon:"./image/fail.png"
            })
        }
        else{
            var data = {
                name: username,
                email: email,
                password: passWord
            }
            
            var storage = localStorage.setItem("userInfo", JSON.stringify(data));
        swal({
            title: "Congratulation, account created successfully!",
            icon : "./image/p.png",
        })
        .then(() =>{
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password1").value = "";
        location = "./index1.html"
    })
}
    },3000);   
}

//  ****************************************** signup() function code end ***************************************



// ***************************************** login() function code start ********************************

function logIn() {
    var email =document.getElementById("email").value.toLowerCase();
    var passWord = document.getElementById("password").value.toLowerCase();
    var storage = localStorage.getItem("userInfo");
    var objSto = JSON.parse(storage);
    console.log(objSto.email)

    var load = document.getElementById("load");
    load.classList.remove("hide");

    if(email === objSto.email && passWord === objSto.password) {
        setTimeout(function(){
        load.classList.add("hide")
        swal({
            title: "Login, Successfully",
            icon : "./image/success.png",
        })
        .then(() =>{
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        location = "./greet.html"
        })
        },3000);
    }
    if(email !== objSto.email || passWord !== objSto.password) {
        setTimeout(function(){
            load.classList.add("hide")
            swal({
                title: "Authentication failed. You entered an incorrect username or password.",
                icon : "./image/fail.png",
                button: "try again"
            })
            .then(() =>{
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            })
        },3000);
    }
}

// ************************* login() function code end ********************************************



// Function for UserName Validation...
function userNameValid() {
    var userName = document.getElementById("username").value;
    var symbol = ["@", "#", ".", "$", " ", ",", "-", "_", "+","*","/","%","&", "^", "?"];
    for(var i= 0; i < symbol.length; i++) {
        for(var j = 0; j < userName.length; j++) {
            // If Symbol[i] found in userName[j] Do this...
            if(userName[j] === symbol[i]) {
                document.getElementById('erruser').innerHTML = "No special Symbol or Space is Allowed";
                break;
            }
            // If userName greater than 10 or less than 5 Do this...
            if(userName.length > 10 || userName.length <5) {
                // document.getElementById('erruser').className += " show";
                document.getElementById('erruser').innerHTML = "min letters Should be 5 and Max letters should be 10.";
                break;
            }
        }         
    }
}



// Email Function
function emailValid() {
    var eMail = document.getElementById('email').value;
    var atpos = eMail.indexOf("@");
    var dotpos = eMail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
        document.getElementById('erremail').innerHTML = "Not a valid e-mail address";
        return false;
    }
}



// PASSWORD FUNCTION
function passwordValid() {
    var passWord = document.getElementById('password').value;
    var validation = /^[a-zA-Z0-9]{8,}/g; //    [A-Z]{1}
    var valid = passWord.match(validation);
    if(valid == null) {
        document.getElementById('errpassword').innerHTML = "First letter Should be Uppercase, no Special symbols are Allowed";
    }
    if(passWord.length > 12 || passWord.length < 8) {
        document.getElementById('errpassword').innerHTML = "min 8 and max length is 12 letters";
    }
}

// CONFIRM PASSWORD FUNCTION
// function passwordValid1() {
//     var passWord = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('password1').value;
//     if(confirmPassword !== passWord) {
//         document.getElementById('errpassword1').innerHTML = "Password does not Match";
//     }
// }



// ************************** to clear all input field code start **************************************
function allClear(eId) { 
    document.getElementById(eId).innerHTML = "";
}
// ************************** to clear all input field code end **************************************




// ************************ greet section Code Start ***********************************
var localData = localStorage.getItem("userInfo");
var localObj = JSON.parse(localData);
document.getElementById("getname").innerHTML = localObj.name;
// ************************ greet section Code End ***********************************





// *****************************  Forget Section code Start************************************
function forget() {
    var load = document.getElementById("load");
    load.classList.remove("hide");
    var count = 11;
    var email = document.getElementById("email").value.toLowerCase();
    if(email === localObj.email) {
        
        var container = document.getElementById("passContainer");
        container.classList.remove("hide");
        document.getElementById("getpassword").innerHTML = localObj.password;
       

    setInterval(function(){
        var sec = document.getElementById("sec").innerHTML = --count;
        if(count === 0) {
        document.getElementById("email").value = "";
        load.classList.add("hide");
        container.classList.add("hide");
        location = "./index1.html"
        }
    },1000);
}
    else{
        load.classList.add("hide");
        document.getElementById("email").value = "";
    swal({
            title: "Could not find any email...",
            icon: "./image/fail.png"
        })
        .then(() => {
            location = "./index.html"
        })
    }
}
// *****************************  Forget Section code End ************************************


