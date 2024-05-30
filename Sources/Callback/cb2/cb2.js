

var LCK = [
  "GENG",
  "T1",
  "DK",

]

var htmls = LCK.map(function(arguments){
  return `<h1>${arguments}</h1>`
});

console.log(htmls.join(""))

console.log("================================================")






// Cách 2, tự tạo function map2 thay cho map
Array.prototype.map2 = function(callback){
  var output = [], arrayLength = this.length;
  for(var i=0;   i<arrayLength; i++){
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
}


var languages = [
  "javascript",
  "python",
  "ruby"
]

var htmlsyntax = languages.map2(function(language){
  return `<h1>${language}</h1>`
})
console.log(htmlsyntax.join(""))
console.log("================================================")






// tự tạo một phương thức
// Long chọn