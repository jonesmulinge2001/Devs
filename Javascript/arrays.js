let names = ["John", "Jane", "Mark", "Matt", "Emily", "Ann"];
//function to find name
function findName(name){
    if(names.includes(name)) {
        return `${name} is in the list`;
    }
    else {
        return `${name} is not in the list`;
    }
}
// call the function
let resultName = findName("Clare");
//console.log(resultName);




// function to add name
function addName(name) {
    names.push(name);
    return `${name} has been added to the list`;
}
// call the function
let resultAddName = addName("Flo");
//console.log(resultAddName);


// function to remove name
function removeName(name) {
    let index = names.indexOf(name);
    if(index !== -1) {
        names.splice(index, 1);
        return `${name} haas been removed from the list`;
    }
    else {
        return `${ name } was not found in the list`;
    }
}

// call the function
let resultRemoveName = removeName("Matt");
//console.log(resultRemoveName);


// function to display names
function displayNames() {
    names.forEach(n => {
        console.log(n);
    })
}
// call the function
displayNames();


// using filter() method => Selects elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);


// array of posts
const posts = [
    {id: 1, title: "Post One", category: "Web Development"},
    {id: 2, title: "Post Two", category: "Programming"},
    {id: 3, title: "Post Three", category: "Web Development"},
    {id: 4, title: "Post Four", category: "Web Development"},
    {id: 5, title: "Post Five", category: "Programming"},
    {id: 6, title: "Post Six", category: "Web Development"},
    {id: 7, title: "Post Seven", category: "Programming"},
    {id: 8, title: "Post Eight", category: "Web Development"},
    {id: 9, title: "Post Nine", category: "Programming"},
    {id: 10, title: "Post Ten", category: "Web Development"},
];

// filter posts by category
const webPosts = posts.filter(post => post.category === "Web Development");
console.log(`These are the ${webPosts.length} posts in the Web Development category`);
console.log(webPosts);
