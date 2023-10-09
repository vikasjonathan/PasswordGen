// Assignment Code
var generateBtn = document.querySelector("#generate");
password = "";
console.log(password)
var checker = 1;
var caseTypeLower;
var caseTypeNumeric;
var caseTypeSpecial;
var caseTypeUpper;
var specialCharacter = ["!#$%&)(*+-./\:\;<,=>?@[]^_`{|}~"];
var numbers = ["123456789"];
var alphabetsSmall = ["abcedefghijklmnopqrstuvwxyz"];
var alphabetsCap = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var passwordf = "";// to remove the undefined
var lengthPassword;

function getCriteria()
{
  caseTypeLower = confirm("Do you want lower case?");
    console.log(caseTypeLower);
    caseTypeUpper = confirm("Do you wnat Upper case?");
    console.log(caseTypeUpper);
    caseTypeNumeric = confirm("Do you want Numeric Values?");
    console.log(caseTypeNumeric);
    caseTypeSpecial = confirm("Do you want Special Characters");
    console.log(caseTypeSpecial);
    if(caseTypeLower==false && caseTypeNumeric==false && caseTypeSpecial== false && caseTypeUpper== false)
    {
      confirm("You need to select the criteria");
      getCriteria();
      }

}
function length(){
  lengthPassword = window.prompt("enter length of password 8 to 128");

  if (lengthPassword < 8 || lengthPassword > 128) {

   confirm("Please enter password length in range"); //https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
   length();

}
return lengthPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordf;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //input length in prompt
  length();
  getCriteria();
  console.log(numbers)
  if (caseTypeLower == true) {
    password = password + alphabetsSmall;
  }
  if (caseTypeUpper == true) {
    password = password + alphabetsCap;
  }
  if (caseTypeNumeric == true) {
    password = password + numbers;
  }
  if (caseTypeSpecial == true) {
    password = password + specialCharacter;
  }

  for (var i = 0; i < lengthPassword; i++) {
    var random = password[Math.floor(Math.random() * password.length)];
    console.log(random)
    passwordf = passwordf + random;
  }
  console.log(passwordf);
}
 /*window.prompt
document.getElementById("password").textContent = passwordf;
document.getElementById("password").placeholder = passwordf;*/











