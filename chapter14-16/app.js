
// Question 1

var studentNames = [];

// Question 2

var studentNames = new Array()

// Question 3

var stringsArray = ["Apple", "Mango", "Banana", "Orange"]

// Question 4

var numbersArray = [10, 20, 30, 40, 50]

// Question 5

var booleanArray = [true, false, true, false]

// Question 6 

var mixedArray = ["Ali", 20, true, "Karachi", 50]

// Question 7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

document.write("<h2>Educational Qualifications</h2>")

for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>")
}

// Question 8 

var studentNames = ["Ali", "Ahmed", "Sara"]
var scores = [400, 350, 450];

var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {

    var percentage = (scores[i] / totalMarks) * 100;

    document.write(
        "Score of " + studentNames[i] + " is " + scores[i] +
        ". Percentage: " + percentage + "%<br>"
    );
}

// Question 9 

var colors = ["Red", "Green", "Blue"]

document.write("Original Array: " + colors + "<br><br>")

var colorBeginning = prompt("Which color do you want to add to the beginning?")

colors.unshift(colorBeginning)

document.write("After adding color to beginning: " + colors + "<br><br>")

var colorEnd = prompt("Which color do you want to add to the end?")

colors.push(colorEnd)

document.write("After adding color to end: " + colors + "<br><br>")


colors.unshift("Yellow", "Purple")

document.write("After adding two colors to beginning: " + colors + "<br><br>")

colors.shift()

document.write("After deleting first color: " + colors + "<br><br>")


colors.pop()

document.write("After deleting last color: " + colors + "<br><br>")

var index = prompt("At which index do you want to add a color?")
var newColor = prompt("Enter color name:")

colors.splice(index, 0, newColor)

document.write("After adding color: " + colors + "<br><br>")

var deleteIndex = prompt("At which index do you want to delete color(s)?")
var deleteCount = prompt("How many colors do you want to delete?")

colors.splice(deleteIndex, deleteCount)

document.write("Final Array: " + colors)

// Question 10

var scores = [320, 450, 120, 280, 390]

scores.sort(function(a, b) {
    return a - b;
});

document.write("Scores in ascending order: " + scores);

// Question 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

var selectedCities = cities.slice(0, 3)

document.write("Cities: " + cities + "<br>")
document.write("Selected Cities: " + selectedCities)

// Question 12

var arr = ["This ", " is ", " my ", " cat"]

var singleString = arr.join("");

document.write(singleString)

// Quesion 13

var queue = [];

queue.push("Value 1")
queue.push("Value 2")
queue.push("Value 3")

document.write(queue.shift() + "<br>")
document.write(queue.shift() + "<br>")
document.write(queue.shift() + "<br>")

// Question 14

var stack = [];

stack.push("Value 1")
stack.push("Value 2")
stack.push("Value 3")

document.write(stack.pop() + "<br>")
document.write(stack.pop() + "<br>")
document.write(stack.pop() + "<br>")

// Question 15 

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<select>")

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>")
}

document.write("</select>")