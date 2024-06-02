//Create some() function
//
var courses = [
  { 
    name: 'Javascript', 
    coin: 600,
    isFinish: false, 
  },
  { 
    name: 'Angular', 
    coin: 860,
    isFinish: false, 
  },
  { 
    name: 'Vue', 
    coin: 900,
    isFinish: false, 
  },
]

var result = courses.some(function (course, index, array) {
  return course.isFinish === true;
})
console.log(results)