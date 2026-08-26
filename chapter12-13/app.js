
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
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

document.write(greeting);

// Question  7 

var time = prompt("Enter time in 24 hours clock format:");

if (time >= 0 && time < 1200) {
    document.write("Good morning");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good evening");
}
else if (time >= 2100 && time <= 2359) {
    document.write("Good night");
}
else {
    document.write("Invalid time");
}