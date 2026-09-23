// Question 1

function power(a, b) {
    var result = 1;

    for (var i = 1; i <= b; i++) {
        result = result * a;
    }

    return result;
}

var a = +prompt("Enter base:");
var b = +prompt("Enter power:");

document.write("Answer: " + power(a, b));

// Question 2

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

var year = +prompt("Enter a year:");

document.write(leapYear(year));

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
    for (var i = 0; i < text.length; i++) {
        if (text[i] === character) {
            return i;
        }
    }

    return -1;
}

var text = prompt("Enter a sentence:");
var character = prompt("Enter a character:");

document.write("Index: " + myIndexOf(text, character));

// Question 6 

function removeVowels(sentence) {
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
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
            result += sentence[i];
        }
    }

    return result;
}

var sentence = prompt("Enter a sentence:");

document.write("Without vowels: " + removeVowels(sentence));

// Question 7

function countVowels(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
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
    }

    return count;
}

var text = prompt("Enter a line of text:");

document.write("Occurrences: " + countVowels(text));

// Question 8
function meters(km) {
    return km * 1000;
}

function feet(km) {
    return km * 3280.84;
}

function inches(km) {
    return km * 39370.1;
}

function centimeters(km) {
    return km * 100000;
}

var km = +prompt("Enter distance in kilometers:");

document.write("Meters: " + meters(km) + "<br>");
document.write("Feet: " + feet(km) + "<br>");
document.write("Inches: " + inches(km) + "<br>");
document.write("Centimeters: " + centimeters(km));
// Question 9 
function overtimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    } else {
        return 0;
    }
}

var hours = +prompt("Enter hours worked:");

document.write("Overtime Pay: Rs. " + overtimePay(hours));
// Question 10 
var amount = +prompt("Enter amount in hundreds:");

amount = amount * 100;

var notes100 = Math.floor(amount / 100);
amount = amount % 100;

var notes50 = Math.floor(amount / 50);
amount = amount % 50;

var notes10 = Math.floor(amount / 10);

document.write("100 notes: " + notes100 + "<br>");
document.write("50 notes: " + notes50 + "<br>");
document.write("10 notes: " + notes10);