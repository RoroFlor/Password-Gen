// Assignment Code
var generateBtn = document.querySelector("#generate");
// array of options user can choose from
let lChar = ['a', 'b', 'c', 'd', 'e', 'f'];
let uChar = ['A', 'B', 'C', 'D', 'E', 'F'];
let nChar = ['1', '2', '3', '4', '5'];
let sChar = ['!', '@', '#', '$'];
// function generates password
function generatePassword() {
// empty variables to store user choices and send to a final password to display on site
  let possibleChar = [];
  let finalPass = [];
  let ifAllfalse=[lChar, uChar, nChar, sChar]

  let passLength = prompt('How long would you like your password? (Must be 8-128 characters)');
  if (passLength < 8 || passLength > 128) {
    alert('Must me 8-12 characters')
    return;
  }

  if (ifAllfalse===false) {
    alert('Please choose a password type!')
  }

  let lowercase = confirm('Would you like lowercases?');
  if (lowercase) {
    possibleChar = possibleChar.concat(lChar);

  }

  let uppercase = confirm('Would you like uppercases?');
  if (uppercase) {
    possibleChar = possibleChar.concat(uChar);
  };

  let numeric = confirm('Would you like numerics?');
  if (numeric) {
    possibleChar = possibleChar.concat(nChar);
  };

  let special = confirm('Would you like special characters?');
  if (special) {
    possibleChar = possibleChar.concat(sChar);
  }else if(!lowercase && !uppercase && !numeric){
    alert('Please choose a password type!')
    return;
  };

  console.log(possibleChar)
  for (let index = 0; index < passLength; index++) {
    finalPass.push(possibleChar[Math.floor(Math.random() * possibleChar.length)])
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