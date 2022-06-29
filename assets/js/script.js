// Challenge 3 code

//1. State variables
const characterMin = 8;
const characterMax = 128;
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericCharacters = "1234567890"
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`\\{|}~";
var totalCharacters = "";
var finalPassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
