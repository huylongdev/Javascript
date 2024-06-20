//DOM EVENTS
//1. Attribute events

//2. Assigning event by using the element node
var h2element = document.querySelector("h2");
h2element.onclick = function () {
  console.log("h2 was clicked");
};









//cách gọi đến chính nó, không thể dùng this như cách 1 là attribute events
//target dùng để lấy ra element chính nó 
var h3element = document.querySelectorAll("h3");
for(var index in h3element){
  h3element[index].onclick = function(e){
    console.log(e.target.innerText)
  }

}

/**
 * 
Trong JavaScript, tham số e đại diện cho một đối tượng sự kiện (event object) khi xử lý các sự kiện chuột. Đối tượng sự kiện này cung cấp thông tin chi tiết về sự kiện chuột đã xảy ra, bao gồm:

Loại sự kiện chuột: Ví dụ như click, mouseover, mousedown, mouseup, v.v.
Vị trí chuột: Tọa độ x và y của con trỏ chuột trên màn hình hoặc trong phần tử HTML.
Nút chuột được nhấn: Nút chuột trái, giữa hoặc phải được sử dụng.
Phím modifier: Các phím modifier như Ctrl, Shift, Alt có được nhấn hay không.
Đối tượng mục tiêu: Phần tử HTML mà sự kiện chuột xảy ra.
 */
