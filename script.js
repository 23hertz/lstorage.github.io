/*function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
 
  var fname = document.registerForm.fname.value;
  var email = document.registerForm.email.value;
  var pword = document.registerForm.pword.value;
 
  var fnameErr = emailErr = pwordErr = true;
  
  if(fname == "") {
      printError("fnameErr", "Please enter your name");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(fname) === false) {
          printError("fnameErr", "Please enter a valid name");
      } else {
          printError("fnameErr", "");
          fnameErr = false;
      }
  }
  
  if(email == "") {
      printError("emailErr", "Please enter your email address");
  } else {
     
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email address");
      } else{
          printError("emailErr", "");
          emailErr = false;
      }
  }
  
  
  if(pword == "") {
      printError("pwordErr", "Please enter your pasword");
  } else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(pword) === false) {
        printError("pwordErr", "Please enter a valid name");
    } else {
        printError("pwordErr", "");
        pwordErr = false;
    }
      }

  if((fnameErr || emailErr || pwordErr) == true) {
     return false;
  } else {
      
      var dataPreview = "You've entered the following details: \n" +
                        "Name: " + fname + "\n" +
                        "Email Address: " + email + "\n" +
                        "Password: " + pword + "\n" +
                        
      alert(dataPreview);
  }
};
*/



function myForm(){
var fname = document.registerForm.fname.value;
var email = document.registerForm.email.value;
var pword = document.registerForm.pword.value;

var regex = /^[a-zA-Z\s]+$/; 
var emailVal = /^\S+@\S+\.\S+$/;

if(fname == "" || fname == null){
	alert("Name can't be blank");
	return false;
	}

  else if(regex.test(fname) === false) {
    alert("Please enter a valid name");
    return false
 } 
  
else if(pword.length < 5){
	alert("Password length must be 8 charachters long");
	return false;
	}

else if(email == "" || email == null){
	alert("Email can't be blank");
}

else if(emailVal.test(email) === false) {
  alert("Please enter a valid email address");
}

else if(pword == "" || pword == null){
	alert("Password can't be blank");
}
else{
  localStorage.setItem('userName','fname')
  localStorage.setItem('userEmail','email')
  localStorage.setItem('userPword','powrd')
	alert('Your account has been created')
 	}
}

function myLogin(){
  var funame = document.loginForm.fname.value;
  var puword = document.loginForm.pword.value;


  var storedName = localStorage.getItem('userName')

  if(funame != storedName){
    alert('not found') 
  }else{
    alert('found')
  }
  //var regex = /^[a-zA-Z\s]+$/; 
  
  /*if(fname == "" || fname == null){
    alert("Name can't be blank");
    return false;
    }
  
    else if(regex.test(fname) === false) {
      alert("Please enter a valid name");
      return false
   } 
    
  else if(pword.length < 5){
    alert("Password length must be 8 charachters long");
    return false;
    }
    
  
  else if(pword == "" || pword == null){
    alert("Password can't be blank");
  }
  else{
    //alert("Sign Up successful");
    localStorage.setItem('userName','fname')
    localStorage.setItem('userEmail','email')
    localStorage.setItem('userPword','powrd')
    alert('Your account has been created')
     }*/
  }