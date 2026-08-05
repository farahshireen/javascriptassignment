
//Question 1

var city = prompt("Enter your city");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// Question 2

var gender = prompt("Enter your gender (male/female)");

if (gender === "male") {
    alert("Good Morning Sir");
}
else {
    alert("Good Morning Ma'am");
}

// Question 3

var color = prompt("Enter signal color");

if (color === "red") {
    alert("Must Stop");
}
else if (color === "yellow") {
    alert("Ready to move")
}
else if (color === "green") 
    {
    alert("Move now")
}

// Question 4

var fuel = prompt("Enter remaining fuel in litres")

if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

// Question 5 a

var fuel = prompt("Enter remaining fuel in litres");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

// b 

var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c

var c = 12;

if (c++ === 13) {
    alert("condition 1 is true")
}

if (c === 13) {
    alert("condition 2 is true")
}

if (++c < 14) {
    alert("condition 3 is true")
}

if (c === 14) {
    alert("condition 4 is true")
}

// d

var materialCost = 20000;
var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

// f

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question 6 

var totalMarks = +prompt("Enter Total Marks");

var sub1 = +prompt("Enter Marks of Subject 1");
var sub2 = +prompt("Enter Marks of Subject 2");
var sub3 = +prompt("Enter Marks of Subject 3");

var obtained = sub1 + sub2 + sub3;

var percentage = obtained / totalMarks * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// Question 7

var secret = 7;

var guess = +prompt("Guess the secret number (1-10)");

if (guess === secret) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}

// Question 8 

var num = +prompt("Enter a number");

if (num % 3 === 0) {
    alert("Number is divisible by 3");
}
else {
    alert("Number is not divisible by 3");
}

// Question 9 

var num = +prompt("Enter a number");

if (num % 2 === 0) {
    alert("Even Number");
}
else {
    alert("Odd Number");
}

// Question 10 

var temp = +prompt("Enter Temperature");

if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.");
}
else if (temp > 20) {
    alert("Today's Weather is cool.");
}
else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}

// Question 11

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");

var operator = prompt("Enter Operation (+,-,*,/,% )");

if (operator === "+") {
    document.write(num1 + num2);
}
else if (operator === "-") {
    document.write(num1 - num2);
}
else if (operator === "*") {
    document.write(num1 * num2);
}
else if (operator === "/") {
    document.write(num1 / num2);
}
else if (operator === "%") {
    document.write(num1 % num2);
}

