

// Question 1

var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")
var fullName = firstName + " " + lastName;

alert("Hello " + fullName + "!");

// Question 2 

var userInput = prompt("Enter your fav mobile phone")
document.write("length of string  " + userInput.length)

// Question 3

var name = "pakistani";
console.log(name.indexOf("n"));

// Question 4 

var display = "Hello World!"
document.write("last index of 'l': " + display.lastIndexOf("l"))

// Question 5

var name = "Pakistani";
console.log("Character at index 3:" + name.charAt(3));

// Question 6 

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

var value = "472";
var number = Number(value);

document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number);

// Question 10 

var input = prompt("Enter something:")
var result = input.toUpperCase()

console.log(result);

// Question 11 

var input = prompt("Enter something:");
var result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

console.log(result);

// Question 12 

var num = 35.36;

var convert = num.toString();
convert = convert.replace(".", "");

document.write(convert);

// Question 13 

var username = prompt("Enter your username:");

if (username.includes("@") || username.includes(".") ||
    username.includes(",") || username.includes("!")) {

    alert("Please enter a valid username");
}
else {
    document.write("Valid username: " + username);
}

// Question 14 

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Search an item:");

search = search.toLowerCase();

if (item.includes(search)) {
    alert(search + " is available in our bakery.");
}
else {
    alert(search + " is not available in our bakery.");
}

// Question 15 

// // Skip 

// Question 16 

var university = "University of Karachi";

var arr = university.split("");

document.write(arr.join("<br>"));

// Question 17 

var input = prompt("Enter something:");

var lastCharacter = input.charAt(input.length - 1);

document.write("Last character: " + lastCharacter);

// Question 18 