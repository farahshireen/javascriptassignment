// Question 1

var multiArray = [[], [], []];

// Question 2

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Question 3

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

// Question 4

var tableNumber = prompt("Enter table number:")
var tableLength = prompt("Enter table length:")

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>")
}

// Question 5 

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// Question 6 
// a

for (var i = 1; i <= 15; i++) {
    document.write(i + ", ")
}

// b 

for (var i = 10; i >= 1; i--) {
    document.write(i + ", ")
}

// c

for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ")
}
// d
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ")
}
// e
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ")
}

// Question 7 

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search:")

var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, " + userInput + " is found in the list.")
}
else {
    alert("No, " + userInput + " is not found in the list.")
}

// Question 8 

var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    }
}

document.write("Largest number is: " + largest);

// Question 9 

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]
    }
}

document.write("Smallest number is: " + smallest)

// Question 10 

for (var i = 5; i <= 100; i += 5) {
    document.write(i + "<br>")
}