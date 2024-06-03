//Khi nó trả lại ta một nodelist hoặc collection, ta có thể truy cập như mảng
var nodeList1 = document.getElementsByTagName("h1")[0]
console.log(nodeList1);



var nodeList2 = document.getElementsByTagName("h2")
console.log(nodeList2[0]);



var nodeList3 = document.querySelectorAll(".heading-3");
console.log(nodeList3);
for(var i = 0; i < nodeList3.length; i++){
  console.log(nodeList3[i]);
}  



console.log(document.forms["form1"]);
console.log(document.forms[1]);