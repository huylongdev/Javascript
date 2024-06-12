//Cách lấy ra innerText, textContent
var headingElement = document.querySelector("h1"); 
console.log(headingElement.textContent);


//Cách set vào ; innerText, textContent
headingElement.innerText = "new Heading"



console.log("==============================")







//Cách phân biệt innerText và textContent
//Khi dùng innerText, innerText trả về value của textContent(nói đơn giản thì phương thức này trả về y hệt những gì ta nhìn thấy ở trình duyệt web)
// Khi dùng textContent , nó trả về value của textContent, Mặc dù vẫn bỏ qua thực thi mọi thẻ html khác như innerText, tuy nhiên vẫn hiện ra những thẻ đó dưới dạng text (


var demo2 = document.querySelector("h2")
console.log(demo2.innerText)
console.log(demo2.textContent)