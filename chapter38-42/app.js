// Question 1
function power(a, b) {
    var result = 1;
    var i = 1;

    while (i <= b) {
        result = result * a;
        i++;
    }

    return result;
}

var a = +prompt("Enter value of a:");
var b = +prompt("Enter value of b:");

document.write("Answer: " + power(a, b));

// Question 2

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

var year = +prompt("Enter a year:");

document.write(checkLeapYear(year));

// Question 3
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    var S = calculateS(a, b, c);

    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    return area;
}

var a = +prompt("Enter side a:");
var b = +prompt("Enter side b:");
var c = +prompt("Enter side c:");

document.write("Area of Triangle: " + calculateArea(a, b, c));

// Question 4

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction() {
    var m1 = +prompt("Enter marks of Subject 1:");
    var m2 = +prompt("Enter marks of Subject 2:");
    var m3 = +prompt("Enter marks of Subject 3:");

    document.write("Average: " + average(m1, m2, m3) + "<br>");
    document.write("Percentage: " + percentage(m1, m2, m3) + "%");
}

mainFunction();

// Question 5 
function myIndexOf(text, character) {
    var i = 0;

    while (i < text.length) {
        if (text[i] === character) {
            return i;
        }

        i++;
    }

    return -1;
}

var text = prompt("Enter a string:");
var character = prompt("Enter a character:");

document.write("Index: " + myIndexOf(text, character));

// Question 6 

function removeVowels(sentence) {
    var result = "";
    var i = 0;

    while (i < sentence.length) {
        if (
            sentence[i] !== "a" &&
            sentence[i] !== "e" &&
            sentence[i] !== "i" &&
            sentence[i] !== "o" &&
            sentence[i] !== "u" &&
            sentence[i] !== "A" &&
            sentence[i] !== "E" &&
            sentence[i] !== "I" &&
            sentence[i] !== "O" &&
            sentence[i] !== "U"
        ) {
            result = result + sentence[i];
        }

        i++;
    }

    return result;
}

var sentence = prompt("Enter a sentence:");

document.write("Sentence without vowels: " + removeVowels(sentence));

// Question 7

function countVowels(text) {
    var count = 0;
    var i = 0;

    while (i < text.length - 1) {
        var pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
                count++;
                break;
        }

        i++;
    }

    return count;
}

var text = prompt("Enter a line of text:");

document.write("Occurrences: " + countVowels(text));

// Question 8
function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

var distance = +prompt("Enter distance in kilometers:");

document.write("Meters: " + convertToMeters(distance) + "<br>");
document.write("Feet: " + convertToFeet(distance) + "<br>");
document.write("Inches: " + convertToInches(distance) + "<br>");
document.write("Centimeters: " + convertToCentimeters(distance));
// Question 9 
function calculateOvertime(hours) {
    if (hours > 40) {
        var overtimeHours = hours - 40;
        return overtimeHours * 12;
    } else {
        return 0;
    }
}

var hours = +prompt("Enter hours worked:");

document.write("Overtime Pay: Rs. " + calculateOvertime(hours));
// Question 10 
function calculateNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    var notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    var notes10 = Math.floor(amount / 10);

    document.write("100 notes: " + notes100 + "<br>");
    document.write("50 notes: " + notes50 + "<br>");
    document.write("10 notes: " + notes10);
}

var amount = +prompt("Enter amount in hundreds:");

amount = amount * 100;

calculateNotes(amount);