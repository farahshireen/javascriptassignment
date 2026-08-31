

// // Question 1

var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")
var fullName = firstName + " " + lastName;

alert("Hello " + fullName + "!");

// // // Question 2 

var userInput = prompt("Enter your fav mobile phone")
document.write("length of string  " + userInput.length)

// // // Question 3

var name = "pakistani";
console.log(name.indexOf("n"));

// // Question 4 

var display = "Hello World!"
document.write("last index of 'l': " + display.lastIndexOf("l") )

// // Question 5

var name = "Pakistani";
console.log("Character at index 3:" + name.charAt(3));

// // Question 6 

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

alert("Hello " + fullName);

//  Question  7

var city = "Hyderabad";
var result = city.replace("Hyder", "Islam");

console.log(result);

// Question 8 

var message = "Ali and Sami are best friends. They play cricket and football together.";

var result = message.replaceAll("and", "&")

console.log(result)

// Question 9 

// Skip 

// Question 10 

var input = prompt("Enter something:")
var result = input.toUpperCase()

console.log(result);

// Question 11 

var input = prompt("Enter something:");
var result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

console.log(result);