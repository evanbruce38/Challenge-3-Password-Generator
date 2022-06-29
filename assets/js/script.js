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


// 2. Write generatePassword function and clear out previous results
function generatePassword() {
  finalPassword = "";
  promptUser();
  while (!finalPassword) {
    gen();
  };
  totalCharacters = '';
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// 3. prompt user for password criteria
var promptUser = function() {
  
  //ask how long password will be
  characterCount = window.prompt("Please enter yourt password length (8-128)")
  while (characterCount < characterMin || characterCount > characterMax) {
    characterCount = window.prompt("Sorry, please enter your password length (8-128)")
  };

  //ask if they will include lowercase characters  
  includeLower = window.confirm("Do you want to include lowercase characters?");
  if (includeLower) {
    totalCharacters = totalCharacters + lowerCharacters;
  };

  //ask if they will include uppercase characters 
  includeUpper = window.confirm("Do you want to include uppercase characters?");
  if (includeUpper) {
    totalCharacters = totalCharacters + upperCharacters;
  };

  //ask if they will include numeric characters
  includeNum = window.confirm("Do you want to include numbers?");
  if (includeNum) {
    totalCharacters = totalCharacters + numericCharacters;
  };

  //ask if they will include special characters 
  includeSpecial = window.confirm("Do you want to include special characters?");
  if (includeSpecial) {
    totalCharacters = totalCharacters + specialCharacters;
  };
};

// 4. use random functions to generate password
function gen() {
  var result = '';
  for ( var i = 0; i < characterCount; i++ ) {
    result += totalCharacters.charAt(Math.floor(Math.random() * totalCharacters.length));
  };

  //5. check if all criteria has been met
  if ((includeNum) && (result.match(/[0-9]/)) === null) {
    return;
  } else if ((includeLower) && (result.match(/[a-z]/g)) === null) {
    return;
  } else if ((includeUpper) && (result.match(/[A-Z]/g)) === null) {
    return;
  } else if ((includeSpecial) && (result.match(/[ !~@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) === null) {
    return;
  } else {
    finalPassword = result;
    return;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
