// objects in javascript (key: value pair)

// object literal

const user = {
    name: "hitesh",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// let keyword( redeclare and reassign) it is block scopped
let student = {
    studentName: 'Brian',
    course: 'CS',
    age: 19,
    grades: [67,87,98,75],
    isActive: true,
}

// adding an item in the student object
student.faculty = 'FST';
console.log(student.faculty);
student['county'] = 'Nairobi';
console.log(student.county);

// accessing items in an object (2 ways to access items in an obje 1. dot notation, 2. bracket notation)
console.log(student.studentName); // dot notation
console.log(student['course']); // bracket notation

const avegareGrade = () => {
    // reduce method
    let brianGrades = student.grades;
    let avg = brianGrades.reduce((sum, grade) => sum + grade, 0) / brianGrades.length;
    console.log(`${student.studentName} your average grade is ${avg}`);
}

// call the function
avegareGrade();


let myCart = [500,670,220,550];
// calculate the total cost of the items in the cart using reduce method
let totalCost = myCart.reduce((sum, item) => sum + item, 0);
console.log(`The total cost of ${myCart.length} items is ${totalCost}`);


// explore more on methods associated with objects

