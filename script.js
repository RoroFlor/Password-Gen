// Assignment Code
var generateBtn = document.querySelector("#generate");

let lChar= ['a', 'b', 'c', 'd', 'e', 'f'];
let uChar= ['A', 'B', 'C', 'D', 'E', 'F'];
let nChar= ['1', '2', '3', '4', '5'];
let sChar= ['!', '@', '#', '$'];
let possibleChar = [];
let finalPass = [];

function generatePassword() {
  let passLength = prompt('How long would you like your password?(Must be 8-128 char)');

  let lowercase = confirm('Would you like lowercases?');
  if(lowercase) {
    possibleChar = possibleChar.concat(lChar);
    
  };

  let uppercase = confirm('Would you like uppercases?');
  if(uppercase) {
    possibleChar = possibleChar.concat(uChar);
  };

  let numeric = confirm('Would you like numerics?');
  if(numeric) {
    possibleChar = possibleChar.concat(nChar);
  };

  let special = confirm('Would you like special characters?');
  if(special){
    possibleChar = possibleChar.concat(sChar);
  };
console.log(possibleChar)
  for (let index = 0; index < passLength; index++) {
    finalPass.push(possibleChar[Math.floor(Math.random()*possibleChar.length)])
    console.log(finalPass);
  }
  return finalPass.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);



// sample code