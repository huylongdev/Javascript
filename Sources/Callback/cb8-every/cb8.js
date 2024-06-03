 //Create every() function


//Cách 1

// Array.prototype.every2 = function(callback){
//   var output = true;
//   for(var index in this){
//     if(this.hasOwnProperty(index) === true){
//       var result = callback(this[index], index, this); 
//       if(!result){
//         output = false;
//         break;
//       };
//     }
//   }
//   return output;
// }

//Cách 1 ở trên rõ ràng hơn
Array.prototype.every2 = function(cb) {
  for(var index in this){
      if(this.hasOwnProperty(index) === true){
          if(cb(this[index], index, this) === false){
              return false;
          }
      }
  }    
  return true;
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

var result = courses.every2(function (course, index, array) {
  return course.coin >700;
})
console.log(result)