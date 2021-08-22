// Variables needed at global scope
var upperCaseOptions = ['A', 'B', 'C', 'D', 'E','F','G','H','I',];
var lowerCaseOptions = ['a', 'b', 'c', 'd', 'e','f','g','h','i',];
var symbolOptions = ['@', '$', '%', '*', '!','#','^','&','(',];
var numberOptions = ['1', '2', '3', '4', '5','6','7','8','9',];
var counter = 0;
var password = document.querySelector("#password")
var userSelections = [];
var finalPassword = [];
var userSelections = [];
var startOfPassword = [];


// Click enabled on button // Need to figure out how to not include previous password in new password generated. I can't get it off screen but not from the result.
generate.addEventListener("click", function () {
  password.textContent = '';
  finalPassword = []
  userSelections = []
  askPasswordOptions()
})

//Function used to create password

function askPasswordOptions() {
  counter++
  if (counter > 20 || counter < 0) {
    alert("You've done this TWENTY times now!!! Maybe take a break.");
  } else {
  // this is for collecting all of my inputs
    
    var upperCase = confirm("Do you want your password to contain uppercase characters?");
    var lowerCase = confirm("Do you want your password to contain lowercase characters?");
    var symbols = confirm("Do you want your password to contain special characters?");
    var numbers = confirm("Do you want number characters in your password?");
    var userLength = prompt("How long do you want your password to be");
    if (userLength < 8) {
      userLength = alert("Your password is not long enough");
      askPasswordOptions()
    } else if (userLength > 128) {
      userLength = alert("Your password is too long");
      askPasswordOptions()
    }
    // after user selects password inputs this concats each of the selected input arrays to a single array and selects one random character from each array select to include in password.

    if (upperCase) {
      startOfPassword = upperCaseOptions[Math.floor(Math.random() * upperCaseOptions.length)]
      userSelections = userSelections.concat(upperCaseOptions);
    }

    if (lowerCase) {
      startOfPassword = startOfPassword.concat(lowerCaseOptions[Math.floor(Math.random() * lowerCaseOptions.length)])
      userSelections = userSelections.concat(lowerCaseOptions);
    }

    if (symbols) {
      startOfPassword = startOfPassword.concat(symbolOptions[Math.floor(Math.random() * symbolOptions.length)])
      userSelections = userSelections.concat(symbolOptions);
    }

    if (numbers) {
      startOfPassword = startOfPassword.concat(numberOptions[Math.floor(Math.random() * numberOptions.length)])
      userSelections = userSelections.concat(numberOptions);
    }


    //This randomly selects a password based on the desired user length

    for (var i = 0; i < userLength - startOfPassword.length; i++) {
      var randomNumber = Math.floor(Math.random() * userSelections.length)
      var passwordArray = userSelections[randomNumber];
      finalPassword.push(passwordArray);
    }

    finalPassword = finalPassword.concat(startOfPassword);

    //This updated the text field on the page with the password
    password.textContent = finalPassword.join('')
  }
}







