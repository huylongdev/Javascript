//DOM EVENTS
//preventDefault
//stopPropagation


//ví dụ về preventDefault
//preventDefault để ngăn chặn những hành vi mặc đỊnh của 1 cái gì đó
var aElements = document.querySelectorAll('a');
for(var index in aElements){
  aElements[index].onclick = function(e){
    if(!e.target.href.startsWith('https://f8.edu.vn')) {
      e.preventDefault();
    }
  }
}




//VD2
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e){
 e.preventDefault();
}
ulElement.onclick = function(e){
  console.log(e.target);
}
console.log(ulElement);





//stopPropagation
//stopPropagation để ngăn chặn sự kiện lan truyền từ phần tử con lên phần tử cha
//Nhìn qua code bên kia ta có thể thấY , nếu ấn vào button thì nó console.log ra cả div và button, do sk nổi bọt

document.querySelector('div').onclick = function(e){
  console.log('div');
}
document.querySelector('button').onclick = function(e){
  console.log('button')
  e.stopPropagation();
}
