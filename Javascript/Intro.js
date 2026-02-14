
// craeting a variable
// let course = "JavaScript"
// console.log(course)

let marks  = 59.8;
let myname = "Brian";
// console.log(`${myname} scored ${marks} marks`);

let hasGatePass = true;
let hasCompltedUnits = false;
let hasCompletedFee = true;
if((!hasGatePass && hasCompltedUnits) && hasCompletedFee){
    //console.log(`${myname} has cleared with the Uni`)
}
else {
    //console.log(`${myname} please clear with the Uni`)
}

// checking data types
// console.log(typeof marks)
// console.log(typeof hasGatePass)
// console.log(typeof myname)


// operators in js
let firstNumber = 30;
let secondNumber = 50;

let resultMin = firstNumber - secondNumber;
//console.log(resultMin);
let resultAdd = firstNumber + secondNumber;
//console.log(resultAdd);
let resultDiv = firstNumber / secondNumber;
//console.log(resultDiv);
let resultMul = firstNumber * secondNumber;
//console.log(resultMul);

// assignment operators
let price = 100;
// increase price by 20
//price+=20; // price = price + 20

// decrease price by 20
price-=20; // price = price - 20(100 = 100 - 20)

//console.log(price);





// Control flow statements
let studentMarks = 76;
if(studentMarks >= 80){
    //console.log("High Distinction");
}
else if(studentMarks >= 70) {
    //console.log("Distinction");
}
else if(studentMarks >= 60) {
    //console.log("Credit")
}
else if(studentMarks >= 50) {
    //console.log("Pass")
}
else{
    //console.log("Fail")
}

// for loop
// executes code repeatedly as long as the condition is true
for(let i = 0; i < 10; i++){
    //console.log(i)
}
//console.log("Done")

let age = 10;
if(age >=18){
    //console.log('Register as a voter');
}
else if(age >=0) {
    //console.log('Too young to vote');
}
else {
    //console.log('Invalid age');
}


// switch statements in js
let day = "Tuesday";
switch(day) {
    case " Monday":
        console.log("Today is on Monday");
        break;
    
    case "Tuesday":
        console.log("Today is on Tuesday");
        break;
    
    case "Wednesday":
        console.log('Wednesday');
        break;
    
    case "Thursday":
        console.log('Today is on Thursday');
        break;

    default:
        console.log("The End!");
        break;
}


// while loop
// executes code repeatedly as long as the condition is true
// print even numbers from 1 to 100
let number = 0;
while(number <= 100) {
    if(number % 2 == 0) {
        console.log(number);
    }
    // increament the value of number
    number++; // 0+1, 1+1, 2+1...
}


// for... of loop (arrays)
let names = ["Bria", "Joy", "Mitch", "Faith", "Petr"];
// loop through the names array and log the names
for(let name of names){
    console.log(`we found ${name} in the list`);
}



// functions in js

// fucntion to calculate discount if shopping < 500
// 1. No parameters
let totalShopping = 780;
let percentageRate = 0.1;
function calculateDiscount() {
    let discount = totalShopping * percentageRate;
    console.log(discount);
}
calculateDiscount();