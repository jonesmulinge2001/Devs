const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

let students = [];

students = JSON.parse(localStorage.getItem('students')) || [];
displayStudents();

form.addEventListener('submit', function( e) {
    e.preventDefault()// prevent the form from resubmitting/ refresh

    // get values from the input fields
    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regno').value;
    const cat1 = parseFloat(document.getElementById('cat1').value);
    const cat2 = parseFloat(document.getElementById('cat2').value);
    const exam = parseFloat(document.getElementById('exam').value);

    if(cat1 > 30 || cat2 > 30 || exam > 70) return alert('Invalid marks')
    const averageCat = (cat1 + cat2) / 2;
    const finalmark = averageCat + exam;


    // grade logic
    let grade = '';
    if(finalmark >= 70) grade = 'A';
    else if(finalmark >= 60) grade = 'B';
    else if(finalmark >= 50) grade = 'C';
    else if(finalmark >= 40) grade = 'D';
    else grade = 'Fail';

    // create student object
    const student = {
        name,
        regNo,
        cat1,
        cat2,
        exam,
        averageCat,
        finalmark,
        grade,
    }

    // push the student to the array
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    displayStudents();
    form.reset();

});

// function to display students in the table
function displayStudents() {
tableBody.innerHTML = ''; // initially the tbody is empty
// loop through students array
students.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.regNo}</td>
        <td>${student.cat1}</td>
        <td>${student.cat2}</td>
        <td>${student.exam}</td>
        <td>${student.averageCat.toFixed(2)}</td>
        <td>${student.finalmark.toFixed(2)}</td>
        <td>${student.grade}</td>

    `;
    tableBody.appendChild(row);
})

}