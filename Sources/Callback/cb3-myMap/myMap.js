Array.prototype.algoDemo = function(cb) {
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


