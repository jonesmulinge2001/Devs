// functions in js

// fucntion to calculate discount if shopping < 500
// 1. No parameters
let totalShopping = 780;
let percentageRate = 0.1;

function calculateDiscount() {
    let discount = totalShopping * percentageRate;
    //console.log(discount);
}
calculateDiscount();



// 2. Parameters
function customerDiscount(amount, rate) {
    return amount * rate;
}

let discount = customerDiscount(1000, 0.2);
//console.log(discount);


// Task
// create a that calculates the area of a circle 
// parameter (radius)
const pi = 3.142;
function calCircleArea(radius) {
    return pi * radius * radius;
}

// function call
let result =  calCircleArea(8);
//console.log(`The result is ${result}`);



// Arrow functions in js
let areOfRectangle = () => (length * width);
// function call
let length  = 10;
let width = 20;
let area = areOfRectangle(length, width);
//console.log(area);


// create a fucntion simulating login functionality
// parameters(email, password)
function login(email, password) {
    if(email =="j21klm@gmail.com" && password =="jshal.910") {
        console.log("Login successful");
    }
    else {
        console.log("Invalid credentials");
    }
}

// function call
login("j21kl@gmail.com", "jshal.910");


// create a function that takes amount, accountNumber and bankName as parameters
// withdraw money from the account
// deposit money into the account