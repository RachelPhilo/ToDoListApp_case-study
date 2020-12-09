var inputName =document.getElementById("inputName");
var UserError=document.getElementById("UserError");
var inputPassword =document.getElementById("inputPassword");
var pwdError=document.getElementById("pwdError");

// Validating using callback function

function validateUserName(validatePassword){
        if(inputName.value=="admin"){
            return true;
        }
        else{
            UserError.innerHTML="Invalid UserName";
            UserError.style.color="red";
            return false;
        }
        validatePassword();
    }

function validatePassword(){
    if(inputPassword.value=="12345"){
        return true;
    }
    else{
        pwdError.innerHTML="Invalid Password";
        pwdError.style.color="red";
        return false;
    }

}