// Assignment code here

var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UpperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharcters = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','{','|','}','~',']','^','`'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

// function getPasswordOptions() {
//   var length = parseInt(
//     window.prompt('Choose between 8-128 characters for your password.'),
//     console.log("Choose password length.")
//   );
// }

// if (length === Number.isNaN || length === null) {
//   alert('Password length must be provided as a number.');
// }

// if (length < 8) {
//   window.alert('Password lenth must be minimum of 8.');
// }

// if (length > 128) {
//   window.alert('Password length must be 128 characters or less.');
// }

// var hasSpecialCharacters = confirm(
//   'Include numeric characters? Click OK to confirm.'
// );

// var hasLowerCasedCharacters = confirm(
//   'Include lowercase characters? Click OK to confirm.'
// );

// if (
//   hasSpecialCharacters === false &&
//   hasNumericCharacter === false &&
//   hasLowerCasedCharacters === false &&
//   hasUpperCasedCharacters === false
// ) {
//   window.alert('Must select at least one character type');
// }

// var passwordOptions = {
//   length: length,
//   hasSpecialCharacters: hasSpecialCharacters,
//   hasNumericCharacters: hasNumericCharacters,
//   hasLowerCasedCharacters: hasLowerCasedCharacters,
//   hasUpperCasedCharacters: hasUpperCasedCharacters
// };

// return passwordOptions;
// };

// function getRandom(arr) {
//   var randIndex = Math.floor(Math.random() * arr.length);
//   var randElement = arr[randIndex];

//   return randElement;
// }

// GIVEN Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// GIVEN Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GIVEN - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




