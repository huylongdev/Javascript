Array.prototype.myMap = function(cb) {
    var arraylength
}



// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]











//đáp án
/**
 * Array.prototype.algoDemo = function(cb) {
  var output = [], arraylength = this.length;
  for(var i=0; i<arraylength; i++){
    var result = cb(this[i],i);
    output.push(result);
    };
    return output;
}



// Expected results
const numbers = [2023.3,7892.23,4590,27.12];

console.log(numbers.algoDemo(function (number) {
  return number * 2;
})) 

console.log(numbers.algoDemo(function (number, index) {
  return number * index;
})) 



 */