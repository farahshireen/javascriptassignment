
// Question 1

var num = prompt("Enter a positive number:");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

// Question 2

var num = prompt("Enter a negative floating point number:");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

//  Question 3 


// Question 4 

 var dice = Math.floor(Math.random() * 6) + 1;

document.write("Dice value: " + dice);

// Question 5 

var toss = Math.floor(Math.random() * 2);

if (toss === 0) {
    document.write("Coin: Heads");
} else {
    document.write("Coin: Tails");
}

// Question 6 

var num = Math.floor(Math.random() * 100) + 1;

document.write("Random number: " + num);

// Question 7 

var weight = prompt("Enter your weight:");

var parsedWeight = parseFloat(weight);

document.write("Your weight is: " + parsedWeight + " kg");

// Question  8

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = prompt("Guess a number between 1 and 10:");

if (userNumber == secretNumber) {
    alert("Congratulations! You guessed the secret number!");
}
