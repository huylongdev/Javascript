  //Callback là hàm được truyền qua đối số khi gọi hàm khác


function random(argument){
  argument("Hello mina-san");
}
function myCallback(argument){
  console.log(argument);
}
random(myCallback);

console.log("================================================")





function caculate(a, b, cb) {
  return cb(a, b);
}
function sumCb(a,b){
  console.log( a + b);
}
function subCb(a,b){
  console.log( a - b);
}
function multiCb (a,b){
  console.log( a * b);
}
function divCb(a,b){
  console.log( a / b);
}
// Expected results
caculate(1, 2, sumCb) // Output: 3
caculate(1, 2, subCb) // Output: -1
caculate(1, 2, multiCb) // Output: 2
caculate(3, 1, divCb) // Output: 3
