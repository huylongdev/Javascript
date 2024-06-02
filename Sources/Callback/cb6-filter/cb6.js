//Create filter()

Array.prototype.filter2 = function(callback){
  var output = [];
  for(var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result === true){
        output.push(this[index]);
      }
    }
  }
  return output;
}
var courses = [
  { 
    name: 'Javascript', 
    coin: 600 
  },
  { 
    name: 'Angular', 
    coin: 860 
  },
  { 
    name: 'Vue', 
    coin: 900 
  },
]

var filter = courses.filter2(function(course, index, originArray){
  return course.coin > 700;
});

console.log(filter);