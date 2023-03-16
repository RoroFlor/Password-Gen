// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let lChar= 'abcdefghijklmnopqrstuvwxyz'
  let uChar= lChar.toUpperCase()
  let nChar= '1234567890'
  let sChar= '!@#$%^&*()'
  let possibleChar;
  let passLength = prompt('How long would you like your password?(Must be 8-128 char)')
  if(passLength < 8 || passLength > 128) {
    alert('Must be between 8-128 characters')
    generatePassword()  
  }
  
  let lowercase = confirm('Would you like lowercases?')
  if(lowercase) {
    possibleChar += lChar
    // possibleChar = possibleChar + lChar
  }
  let uppercase = confirm('Would you like uppercases?')
  if(uppercase) {
    possibleChar += uChar
  }
  let numeric = confirm('Would you like numerics?')
  if(numeric) {
    possibleChar += nChar
  }
  let special = confirm('Would you like special characters?')
  if(special){
    possibleChar += sChar
  }

  var result = possibleChar
  return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)



// sample code