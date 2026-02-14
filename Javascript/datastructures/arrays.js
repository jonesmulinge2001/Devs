
// Data structures
// Arrays, objects, sets, maps

let cities = ['Nairobi', 'Wote', 'Mombasa','Tokyo', true, 300, {}];
// print all the cities
//console.log(cities);
let city = cities[3];
// console.log(city);

// display all the cites 1 by 1
// for...of loop
for(let myCity of cities) {
    // console.log(myCity);
}

// for loop
for(let i = 0; i <= cities.length; i++) {
    //console.log(cities[i]);
}



// methods associated with arrays
// push, pop, shift, unshift, slice, splice, concat, join, indexOf, lastIndexOf, includes, reverse, sort, filter, map, reduce, forEach, find, findIndex, some, every, fill, copyWithin, flat, flatMap, from, isArray, of

// push() method

let tasks = ['Coding', 'Walking','Cook','Meditation'];
tasks.push('Sleep');
for(let task of tasks){
    // console.log(task);
}

// remove an item from the array
let removedIte = tasks.indexOf('Cook');
tasks.splice(removedIte, 1);
for(let mytask of tasks){
    // console.log(mytask);
}


// filter() method

let numbers = [40,67,89,54,32,68,90,100];
let evenNumbers = numbers.filter(num => num % 2 === 0) 
for(let evenNumber of evenNumbers) {
    // console.log(evenNumber);
}



// checking the existence of an item in an array using includes() method
let shoppingList = ['Flowers', 'Watch','Yoghurt', 'Dell Latitutde', 'Monitor'];
if(!shoppingList.includes('Lenovo')) {
    // console.log('Lenovo was not found in the list');
}


// forEach method (loops in array)
let airports = ['Melbourne','Perth','JKIA','Abu Dhabi','Sydney'];
airports.forEach(airport => {
    console.log(airport);
})