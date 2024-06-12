  //Cách set thêm 1 element khác vào một element

  var boxElement = document.querySelector(".box")
  boxElement.innerHTML = "<h1>Hello</h1>";
  console.log(document.querySelector("h1").innerText);




  //Có thể đồng thờI thêm attr và text lun

  var boxElement2 = document.querySelector(".box2");
  boxElement2.innerHTML = '<h1 style="color:red;" >chOVY</h1>';
  console.log(  boxElement2.outerHTML )
