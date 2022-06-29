// Challenge Code
var generateBtn = document.querySelector("#generate");

// Start generatePassword function
function generatePassword() {

    // 1. Prompt the user for password criteria
      // A. Password length, between 8-128
      let length = window.prompt("How long should your password be? (8-128 characters).");

          // cancel button function
        if (!length) {
          return;
        }
        else if (length < 8 || length > 128) {
          alert("Please input a number between 8-128.")
          generatePassword()
        }
      // B. lowercase, uppercase, numbers, special characters
      let lowerCase = window.confirm("Would you like to include lowercase characters?");
      let upperCase = window.confirm("Would you like to include uppercase characters?");
      let numeric = window.confirm("Would you like to include numeric characters?");
      let special = window.confirm("Would you like to include special characters?");

    

    // 2. Validate the input
    if (lowerCase == false && upperCase == false && numeric == false && special == false) {
      alert("Please select at least one criteria for your password.");
      generatePassword();
    }

    // 3. Generate password based on criteria
    

    return "Password will appear here!"
}
    // 4. Display generated password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);