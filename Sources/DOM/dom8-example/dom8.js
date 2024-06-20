//CÁCH LẤY VALUE CỦA INPUT (ONINPUT / ONCHANGE)
var inputElement = document.querySelector("input[type='text']");
var inputValue;
inputElement.onchange = function(e) {
    inputValue = e.target.value ;
    console.log(inputValue);  
}
//The onchange event occurs when the value of an HTML element is changed.
//The change will be done if we click outside the input field. ( out of FOCUS)
//Using ONINPUT for instant change.( immediately after typing)






//////////////////////////////////////////////

//CHECKBOX
var checkboxE = document.querySelector("input[type='checkbox']");
checkboxE.onchange = function(e) {
  console.log(e.target.checked);
}

//////////////////////////////////////////////
//SELECT
var selectE = document.querySelector("select");
selectE.onchange = function(e) {
  console.log(e.target.value);
}
//////////////////////////////////////////////

// LẮNG NGHE EVENTS CỦA KEYBOARD
document.onkeyup = function(e) {
  console.log(e.which);//Xem thử nút bấm của mình số bao nhiêu
  /**
   * onkeyup
   * onkeydown
   * onkeypress
   */
  switch(e.which) {
    case 13:
      console.log("send chat");
      break;
    case 27:
      console.log("EXIT!");
      break;
  }
}