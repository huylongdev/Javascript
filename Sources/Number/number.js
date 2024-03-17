
// Cũng là khai báo số 1000000 nhưng có cách viết khác. Bạn có thể thêm chữ e vào sau số 1 và chỉ định số số không phía sau chữ e như sau:
var billion = 1e9; // tương tự: 1000000
console.log("billion: ", billion)


var demo = 237.21;
demo = Number.parseInt(demo);
console.log("demo: ", demo)





/**
 * Kiểu số Number trong JS
 * 1. Tạo 1 giá trị number
 * 2.Làm việc với number
 * - To string
 * - To Fixed
 */

var PI = 3.14;
var age = 19;
var otherNumber = new Number(1);
console.log(typeof otherNumber);
// Chúng ta nên chọn cách tạo số thứ nhất , vì cách thứ 2 rưỜm rà hơn. Hơn thế nữa nó khởi tạo 1 object => typeof của nó là Object , không phải number như 2 thằng kia



var num2 = 20 / "A";
console.log("num2: ", num2); 
console.log(typeof num2); // Mặc dù kết quả là NaN nhưng kiểu dữ liệu vẫn là number. (Tuy nhiên nó là một con số không hợp lệ)
// Dưới đây là hàm để kiểm tra một số có phải là số không hợp lệ hay không
console.log( isNaN(num2) );




// toString();
console.log(PI.toString());


//toFixed();  ==> convert sang String và làm tròn số thập phân
var num4 = 30.5553232;
console.log(num4.toFixed(2));
console.log(typeof num4.toFixed(2)); // Kết quả trả  là 1 string