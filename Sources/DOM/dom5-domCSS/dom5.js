


//Cách thêm css
var boxElement = document.querySelector(".box");
//Hiển thị các style css
console.log(boxElement.style);
boxElement.style.width = "200px"
boxElement.style.height = "200px"
boxElement.style.backgroundColor = "red"
boxElement.style.borderRadius = "50%"



// Cáchh khác 
Object.assign(boxElement.style, {
  border: "2px black",
  boxShadow: "2px 2px 20px 2px black"
})
