document.querySelector("#generate").addEventListener("click", writePassword);


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  

    while(confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be between 8-50 characters Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        
    }
    alert("")


}

