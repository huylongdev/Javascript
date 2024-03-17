var fullName = (" Huy Long");
var fullName = new String(" Huy Long");
console.log(typeof fullName);
// Chúng ta nên khai báo 1 chuỗi bằng cách thứ nhất thay vì cách số 2. Vì cách thứ nhất ngắn hơn, và cách thứ 2 sẽ có kiểu dữ liệU là object. Trong khi chúng ta đang tạo ra một chuỗi nên mong muốn rằng kiểu dữ liệu của nó là chuỗi.





// Để chèn một dấu ngoặc kép trong 1 string thì ta dùng dấu \ trước dấu ngoặc kép đó
console.log("Chovy là \"vinh\" lúa")
//Vậy còn trường hợp muốn thêm dấu '\' vào thì chúng ta cũng thêm '\' đằng trước nó. Vì nếu thêm '\' này vào sẽ bị lỗi nếu nó chỉ có 1
console.log(" \\")






//Xem độ dài chuỗi
var mvp = ("Jeong Jihyun");
console.log(fullName.length);
// Vì trong js không thể cắt dòng trong 1 chuỗi, nên ta sẽ làm như sau nếu chuỗi quá dài 
var chovy = ("chovy đẹp trai quá đi ") 
+
("anh em ơi, cho vy quá là xinh xinh xinh xinh");
//  có thể bỏ mấy cái ngoặc tròn ở trên
console.log(chovy);





//Template string ES6
var meat1 = ("cow");
var meat2 = ("chicken");
console.log(`I love ${meat1} and ${meat2}`);
// lưu ý: giá trị đưa vào phải là string
// nếu không phải string thì nó sẽ tự động convert sang string 
