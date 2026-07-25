// Question 1

var a = 10

document.write("Result:<br><br>");
document.write("The value of a is: " + a + "<br>");
document.write("......................................<br><br>");
document.write("The value of ++a is " + (++a) + "<br>");
document.write("Now the number of a is " + a + "<br>");
document.write("The value of a++ is " + (a++) + "<br>")
document.write("The value of ++a is " + a + "<br>");
document.write("The value of --a is " + (--a) + "<br>");
document.write("Now the number of a is " + a + "<br>");
document.write("The value of a-- is " + (a--) + "<br>");
document.write("Now the number of a is " + a + "<br>");

// Question 2

var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write("a is " + a + "<br>")
document.write("b is " + b + "<br>")
document.write("Result is " + result +  "<br>")

// Question 3

var name = prompt("Enter your name");
alert ("Welcome " + name)

// Question 4

var num = prompt("Enter a Number", 5);

document.write("<h2>Table of " + num + "</h2>");

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

var sub1 = prompt("Enter First Subject Name");
var sub2 = prompt("Enter Second Subject Name");
var sub3 = prompt("Enter Third Subject Name");

var totalMarks = 100;

var marks1 = +prompt("Enter Obtained Marks of " + sub1);
var marks2 = +prompt("Enter Obtained Marks of " + sub2);
var marks3 = +prompt("Enter Obtained Marks of " + sub3);

var total = totalMarks * 3;
var obtained = marks1 + marks2 + marks3;

var per1 = (marks1 / totalMarks) * 100;
var per2 = (marks2 / totalMarks) * 100;
var per3 = (marks3 / totalMarks) * 100;

var percentage = (obtained / total) * 100;

document.write("<table border='1'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + per1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + per2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + per3 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + total + "</th>");
document.write("<th>" + obtained + "</th>");
document.write("<th>" + percentage + "%</th>");
document.write("</tr>");

document.write("</table>");

