//Cách gán attribute
//Cách 1 : setter
var setter = document.querySelector("h1");
setter.className = "vip pro"
console.log(setter)


var setter2 = document.querySelector("a");
setter2.href = "fb.com"
console.log(setter2)


//cách 2: setAttribute
//Ví dụ: cách setter thì ta ko thể thêm 1 atr href vào h1, mà nó phải vào thẻ a. Tuy nhiên nếu dùng setAttribute thì ta có thể thêm mọi thứ tuỳ thích
var sab = document.querySelector("h2");
sab.setAttribute("href", "chovy")
console.log(sab)

sab.id = "faker"

//getAttribute
console.log(sab.getAttribute("id"))

setter.setAttribute("class","red")