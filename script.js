// Assignment code here

function generatePassword() {
  var passlength = prompt("How long would you like the password? (8-128)")
  passlength = parseInt(passlength);
  if (passlength < 8) {
    passlength = 8;
  }
  if (passlength > 128) {
    passlength = 128;
  }
  var lowercase = confirm("Do you want lowercase?");
  var uppercase = confirm("Do you want uppercase?");
  var numeric = confirm("Would you like numeric characters?");
  var special = confirm("Would you like special characters?");
  
  //var chosen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var chosen = "";

  if (lowercase == true) {
    chosen += "abcdefghijklmnopqrstuvwxyz";
  }
 
  if (uppercase == true) {
    chosen += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
 
  if (numeric == true) {
    chosen += "123456789";
  }

  if (special == true) {
    chosen += "~`!@#$%^&*()-_=+{[}]|:;'<,>.?/";
  }

  var newpass = "";


  while (newpass.length < passlength) {
    newpass += chosen[Math.floor(Math.random() * chosen.length)];
  } 
  



  //console.log(chosen.length);
  //console.log(newpass);
  //console.log(passlength);
  //console.log(lowercase);
  //console.log(uppercase);
  //console.log(numeric);
  //console.log(special)
  return(newpass);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
