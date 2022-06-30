// Generator Functions

//1. State variables and Array

// Variables
var totalCharacters = "";
var randomPassword = "";


// Array values
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0123456789"];
var specialCharacters = ["!\"#$%&'()*+,-./:;<=>?@[]^_`\\{|}~"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 2. Write generatePassword function and clear out previous results
function generatePassword() {
  randomPassword = "";
  criteriaPrompts();
  while (!randomPassword) {
    gen();
  };
  totalCharacters = '';
  return randomPassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// 3. prompt user for password criteria
var criteriaPrompts = function() {
  
  //ask how long password will be
  numberOfCharacters = window.prompt("Please enter your password length (8-128)")
  while (numberOfCharacters < 8 || numberOfCharacters > 128) {
    numberOfCharacters = window.prompt("Please enter a number between 8 and 128.")
  };

  //ask if they will include lowercase characters  
  criteriaLower = window.confirm("Would you like to include lowercase characters?");

  if (criteriaLower) {
    totalCharacters = totalCharacters + lowerCharacters;
  };

  //ask if they will include uppercase characters 
  criteriaUpper = window.confirm("Would you like to include uppercase characters?");

  if (criteriaUpper) {
    totalCharacters = totalCharacters + upperCharacters;
  };

  //ask if they will include numeric characters
  criteriaNum = window.confirm("would you like to include numbers?");

  if (criteriaNum) {
    totalCharacters = totalCharacters + numericCharacters;
  };

  //ask if they will include special characters 
  criteriaSpecial = window.confirm("Would you like to include special characters?");

  if (criteriaSpecial) {
    totalCharacters = totalCharacters + specialCharacters;
  };
};

// 4. use random functions to generate password
function gen() {
  var result = '';
  for ( var i = 0; i < numberOfCharacters; i++ ) {
    result += totalCharacters.charAt(Math.floor(Math.random() * totalCharacters.length));
  };

  //5. check if all criteria has been met
  
   if ((criteriaLower) && (result.match(/[a-z]/g)) === null) {
    return;
  } else if ((criteriaUpper) && (result.match(/[A-Z]/g)) === null) {
    return;
  } else if ((criteriaNum) && (result.match(/[0-9]/)) === null) {
      return;
  } else if ((criteriaSpecial) && (result.match(/[ !~@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) === null) {
    return;
  } else {
    randomPassword = result;
    return;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
