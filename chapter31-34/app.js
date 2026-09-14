// Question 1

var rightNow = new Date();

document.write(rightNow);

// Question 2 

var rightNow = new Date();

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

var month = rightNow.getMonth();

alert(monthNames[month]);

// Question 3

var rightNow = new Date();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var day = rightNow.getDay();

alert(dayNames[day]);

// Question 4

var rightNow = new Date();

var day = rightNow.getDay();

if (day === 0 || day === 6) {
    alert("It's Fun day");
}

// Question 5

var rightNow = new Date();

var date = rightNow.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Question 6 

var rightNow = new Date();

var minutes = rightNow.getTime() / (1000 * 60);

document.write("Minutes since midnight, Jan. 1, 1970: " + minutes);

// Question 7

var rightNow = new Date();

var hours = rightNow.getHours();

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

// Question 8

var laterDate = new Date("December 31, 2020");

document.write(laterDate);

// Question 9

var ramadanDate = new Date("June 18, 2015");
var rightNow = new Date();

var difference = rightNow.getTime() - ramadanDate.getTime();

var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

alert(daysPassed + " days have passed since 1st Ramadan 2015");

// Question 10

var rightNow = new Date();
var beginningOf2015 = new Date("January 1, 2015");

var difference = rightNow.getTime() - beginningOf2015.getTime();

var seconds = Math.floor(difference / 1000);

document.write("Seconds elapsed since beginning of 2015: " + seconds);

// Question 11

var rightNow = new Date();

var currentHour = rightNow.getHours();

rightNow.setHours(currentHour + 1);

document.write(rightNow);

// Question 12

var rightNow = new Date();

rightNow.setFullYear(rightNow.getFullYear() - 100);

alert(rightNow);

// Question 13

var age = prompt("Enter your age:");

var rightNow = new Date();
var currentYear = rightNow.getFullYear();

var birthYear = currentYear - age;

document.write("Your birth year is: " + birthYear);

// Question 14

var customerName = "Syeda Farah";
var numberOfUnits = 250;
var chargesPerUnit = 25;
var latePaymentSurcharge = 100;

var rightNow = new Date();

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

var currentMonth = monthNames[rightNow.getMonth()];

var netAmount = numberOfUnits * chargesPerUnit;

var grossAmount = netAmount + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));