
// objects (key: value) pair
let chukaUni = {
    name: 'Chuka University',
    location: 'Chuka',
    yearOfEstablishment: 1970,
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
    students: 30000,
    isPublic: true
}

// access items in an object
let instname = chukaUni.yearOfEstablishment;
console.log(instname);


// posts
let userPosts = [
    {id: 1, title: 'My birthday',views: 10000, likes: 2000},
    {id: 2, title: 'Visiting my best friend', views: 1200, likes:133},
    {id: 3 , title: ' Going for retreat', views: 234, likes: 455},
    {},
    {},
]

// display all the posts
for(let post of userPosts ) {
    console.log(post);
}