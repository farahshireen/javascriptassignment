// Question 1

function displayDateTime() {
    let currentDate = new Date();
    document.write(currentDate);
}

displayDateTime();

// Question 2 

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert("Hello " + fullName);
}

let firstName = prompt("Enter first name:");
let lastName = prompt("Enter last name:");

greetUser(firstName, lastName);

// Question 3

function addNumbers(num1, num2) {
    return num1 + num2;
}

let num0 = Number(prompt("Enter first number:"));
let num3 = Number(prompt("Enter second number:"));

let res = addNumbers(num0, num3);

document.write("Sum of two numbers is: " + res);

// Question 4

function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result = calculator(num1, num2, operator);

document.write("Result: " + result);

// Question 5

function square(number) {
    return number * number;
}

let num = Number(prompt("Enter a number:"));

document.write("Square is: " + square(num));

// Question 6

function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

let number = Number(prompt("Enter a number:"));

document.write("Factorial is: " + factorial(number));

// Question 7

function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

let start = Number(prompt("Enter starting number:"));
let end = Number(prompt("Enter ending number:"));

displayCounting(start, end);

// Question 8

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(number) {
        return number * number;
    }

    let hypotenuseSquare =
        calculateSquare(base) + calculateSquare(perpendicular);

    let hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}

let base = Number(prompt("Enter base:"));
let perpendicular = Number(prompt("Enter perpendicular:"));

document.write("Hypotenuse: " +
    calculateHypotenuse(base, perpendicular));

    // Question 9 A

    function calculateArea(width, height) {
    return width * height;
}

document.write("Area: " + calculateArea(10, 5));
 // B
 function calculateArea(width, height) {
    return width * height;
}

let width = 10;
let height = 5;

document.write("Area: " + calculateArea(width, height));

// Question 10 

function checkPalindrome(string) {
    let reversedString = string.split("").reverse().join("");

    if (string === reversedString) {
        return "It is a palindrome";
    } else {
        return "It is not a palindrome";
    }
}

let stringg = prompt("Enter a word:");

document.write(checkPalindrome(stringg));

// Question 11

function capitalizeWords(string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() +
                   words[i].slice(1);
    }

    return words.join(" ");
}

let stringgg = "the quick brown fox";

document.write(capitalizeWords(stringgg));

// Question 12

function findLongestWord(string) {
    let words = string.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

let stringggg = "Web Development Tutorial";

document.write(findLongestWord(stringggg));

// Question 13

function countOccurrences(string, letter) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }

    return count;
}

let string = "JSResourceS.com";
let letter = "o";

document.write("Number of occurrences: " +
    countOccurrences(string, letter));

    // Question 14

    function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference + "<br>");
}

function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write("The area is " + area);
}

let radius = Number(prompt("Enter radius:"));

calcCircumference(radius);
calcArea(radius);
