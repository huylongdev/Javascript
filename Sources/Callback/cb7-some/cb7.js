//Create some() function




// Array.prototype.some2 = function(callback){
//   for(var index in this){
//     if(this.hasOwnProperty(index) === true){
//       if(callback(this[index], index, this) === true){
//         return true;
//       };
//     }
//   }
//   return false;
// }

//Dưới đây là cách 2
Array.prototype.some2 = function(callback){
  var output = false;
  for(var index in this){
    if(this.hasOwnProperty(index) === true){
      if(callback(this[index], index, this) === true){
        output = true;
        break;
      };
    }
  }
  return output;
}


var courses = [
  { 
    name: 'Javascript', 
    coin: 600,
    isFinish: true, 
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

var result = courses.some2(function (course, index, array) {
  return course.isFinish === true;
})
console.log(result)