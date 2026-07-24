// Question 1
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;

document.write("The Sum of 10 and 5 is " + sum + "<br>");


// Question 2

var number;

document.write("Value after variable declaration is: " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is : " + remainder + "<br>");

// Question 3

var ticketPrice = 600;
var total = ticketPrice * 5;

document.write("Total cost to buy 5 tickets = " + total + " PKR" + "<br>");

// Question 4

var num = 4;

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");

// Question 5

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var f = 70;
var c = (f - 32) * 5 / 9;

document.write(f + "°F is " + c + "°C" + "<br>");

// Question 6 

var item1 = 650;
var item2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;

var total = (item1 * qty1) + (item2 * qty2) + shipping;

document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges is " + shipping + "<br>");
document.write("Total Cost is " + total + "<br>");

// Question 7

var totalMarks = 980;
var obtained = 804;

var percentage = (obtained / totalMarks) * 100;

document.write("Total Marks = " + totalMarks + "<br>");
document.write("Marks Obtained = " + obtained + "<br>");
document.write("Percentage = " + percentage + "%" + "<br>");

// Question 8

var total = (10 * 104.80) + (25 * 28);

document.write("Total Currency in PKR = " + total + "<br>");

// Question 9

var currentYear = 2026;
var birthYear = 2004;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("Current Year " + currentYear + "<br>");
document.write("Birth Year " + birthYear + "<br>");
document.write("Your age is " + age2 + "<br>");

// Question 10

var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius = " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");

// Question 11 

var snack = "Chocolate Chip";
var currentAge = 20;
var maxAge = 80;
var perDay = 2;

var totalNeeded = (maxAge - currentAge) * 365 * perDay;

document.write("Favourite Snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Amount per Day: " + perDay + "<br>");
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".");