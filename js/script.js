//1: Find The Largest Number
//Nested if statement

/*
var n1 = prompt("First Number: ");
var n2 = prompt("Second Number: ");
var n3 = prompt("Third Number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2) {
    if (n1 >= n3) {
        console.log(n1 + " is the largest");
    }
    else{
        console.log(n3 + " is the largest");
    }
}else {
    if (n2 >= n3) {
        console.log(n2 + " is the largest");
    }
    else {
        console.log(n3 + " is the largest");
    }
}
*/
/*
//2: Switch

console.log("Select an option:\na. Option 1 \nb. Option 2 \nc. Option 3 ");

choice = prompt();

var text;

switch (choice) {
    case "a": //if(choice=="a")
        text = "Option 1 Selected";
        break;
    case "b":
        text = "Option 2 Selected!";
        break;
    case "c":
        text = "Option 3 Selected!";
        break;
    default: //else
        text = "No option is selected";
        break;

    
}
console.log(text);
*/

//3: Student Grade Calculation
/*
var number = prompt("what is your number?");
number = parseInt(number);
var grade;

if (number <= 100 && number >=80 ) {
    grade = "A+";
} else if ( number < 80 && number >= 70) {
    grade = "A";
}else if ( number < 70 && number >= 60) {
    grade = "A-";
}else if ( number < 60 && number >= 50) {
    grade = "B";
}else if ( number < 50 && number >= 40) {
    grade = "C";
}else if ( number < 40 && number >= 33) {
    grade = "D";
}else if (number , 33 && number >= 0) {
    grade = "F";
}else {
    grade = "Invalid Input";
}
console.log("Your Grade: " + grade);

*/
//4: Simple Calculator
/*
console.log("Select an Option: \n1. Add \n2. Subtract\n3. Multiply \n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an Operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
}else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;

    }
    if (result == null) {
        console.log("No Result!");
    }
    else{
        console.log("Result: " + result);
    }
}
*/
//5: Sum of the series of square numbers!
/*
var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) { continue; }
    series += " + ";
    
}
console.log(`${series} = ${sum}`);
*/
