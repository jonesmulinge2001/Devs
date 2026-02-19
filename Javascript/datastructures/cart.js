let myCart = [3000, 500, 580, 470, 1000];

const getAverageCart = () => {
    let total = myCart.reduce((sum, price) => sum + price, 0);
    console.log(total)
}

getAverageCart();



// objects
let student = {
    name: 'Micthele Mev',
    age: 19,
    course: 'CS',
    grades : [60, 78,86, 79],
    isWorking: true
}

const getAverage = () => {
  let grade = student.grades; 
  let average = grade.reduce((sum, t) => sum + t, 0);
  console.log(average);
}

student.email = 'mev@gmail.com';
console.log(student.email);

console.log(student.age);
console.log(student['course']);

getAverage();