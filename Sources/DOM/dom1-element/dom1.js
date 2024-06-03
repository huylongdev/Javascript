// 1.Element: ID, class, tag,...
// CSS Selector, HTML collection


// getElementById
// getElementByClassName
// getElementByTagName
// CSS Selector 
var headingNodes = document.querySelector("html .box .heading-2");
//Như các bạn thấy, khi get heading-2 ra nó chỉ select ra đúng 1 element đầu tiên mà nó tìm thấy
/**Nếu muốn select ra nhiều thì dùng querySelectorAll. Nó sẽ get ra một NodeList, và ta có thể truy cập như truy cập mảng:
   * var headingNodes = document.querySelectorAll("html .box .heading-2");
 * console.log(headingNodes[0]);
 */ 
console.log(headingNodes);
var headingNodes2 = document.querySelector(".box .heading-2:first-child");
console.log(headingNodes2);
var headingNodes3 = document.querySelector(".box .heading-2:nth-child(2)");
console.log(headingNodes3);

console.log("============================================")









//HTML Collection


//form
console.log(document.forms);
//Dưới đây là 1 số cách select
console.log(document.forms.form1);
console.log(document.forms[1]);
console.log(document.forms["form3"]);




//anchor
//Cái này đã không còn được hỗ trợ nữa vì một số hạn chế ( ví dụ như ta phải set name)
//Vậy nên hãy dùng những cách ở trên kia để select thẻ a
console.log(document.anchors);