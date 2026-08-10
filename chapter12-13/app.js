
// Question 1

var ch = prompt("Enter a character:")

if (ch >= "0" && ch <= "9") {
    document.write("The given input is a number ")
}
else if (ch >= "A" && ch <= "Z") {
    document.write("The given input is an uppercase letter ")
}
else if (ch >= "a" && ch <= "z") {
    document.write("The given input is a lowercase letter ")
}
else {
    document.write("The given input is neither a number nor a letter " )
    
}


// Question 2 

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    document.write(num1 + " is larger");
}
else if (num2 > num1) {
    document.write(num2 + " is larger");
}
else {
    document.write("Both integers are equal");
}

// Question 3

var num = +prompt("Enter a number:");

if (num > 0) {
    document.write("Positive number");
}
else if (num < 0) {
    document.write("Negative number");
}
else {
    document.write("Zero");
}

// Question 4 

var ch = prompt("Enter a character:");

if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    document.write("Its a vowel");
}
else {
    document.write("Its not a vowel");
}

// Question 5

var correctPassword = "abc123";

var userPassword = prompt("Enter your password:");

if (userPassword == "") {
    document.write("Please enter your password");
}
else if (userPassword == correctPassword) {
    document.write("Correct! password");
}
else {
    document.write("Incorrect password");
}

// Question 6 


// Question  7 

