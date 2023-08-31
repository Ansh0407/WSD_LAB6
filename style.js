var attempt = 3; 

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var usernameRegex = /^[a-zA-Z0-9]{6,}$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


if (!passwordRegex.test(password)) {
  alert("Invalid password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit and one special character.");
  return false;
}
if (!usernameRegex.test(username)) {
  alert("Invalid username. It must be at least 6 characters long and contain only letters and numbers.");
  return false;
}
if ( username == "Formget" && password == "Formget@123"){
alert ("Login successfully");
window.location = "success.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
