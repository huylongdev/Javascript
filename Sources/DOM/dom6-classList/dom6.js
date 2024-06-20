var boxElement = document.querySelector(".box");
//Value trả về dạng String
console.log(boxElement.classList.value)
console.log(boxElement.classList.length)
console.log("=====================================")





// add()   : Thêm class vào element
var addition = document.querySelector(".addition");
addition.classList.add("red","box-shadow");






//contains() : Kiểm tra class có tồn tại trong element hay không
console.log(addition.classList.contains("red"))
console.log("=====================================")



//remove() : Xóa class khỏi element
setTimeout(() => {
    addition.classList.toggle("red")
}, 3000);// Sau 3s sẽ xóa class red
console.log("=====================================")





//toggle(): Nếu class tồn tại thì xóa, không tồn tại thì thêm vào
setInterval(() => {
  addition.classList.toggle("blue")
}, 3000);// Sau 3s sẽ thêm class blue, sau 3s sẽ thực hiện tiếp mãi mãi (vì dùng setInterval)




