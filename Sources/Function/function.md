## HÀM (Function) trong javascript
1. *Hàm*
   - Hàm là một khối mã
   - Làm 1 việc cụ thể
2. *Loại hàm*
   - Built-in function
   - Tự đỊnh nghĩa function
3. *Tính chất*
   - Không thực thi khi định nghĩa
   - Sẽ thực thi khi đƯợc gọi
   - Có thể nhận tham số 
   - có thể trả về một giá trị
4. Tạo hàm đầu tiên

## THAM SỐ
1. *Tham số ?*
   - Định nghĩa?
   - Kiểu dữ liệU?
   - Tính private?
   - 1 tham số 
   - Nhiều tham số
2. *Truyền tham số*
   - 1 tham số
   - Nhiều tham số 
3. Arguments?
   - Đối tượng arguments
   - Giới thiệU vòng for 

## CÁC LOẠI FUNCTIONS
*1.Declaration function*

- function long(){
}
<!-- Declaration function bắt đầu bằng function và có tên , nếu không có tên thì không phải -->


*2.Expression function*

var long = function(){}
<!-- Ông này thì xuất hiện toán tử gáN -->
<!-- Expression thì không cần đặt tên. CHúng ta có thể đặt tên trong những trường hợp mà cần đọc code cho dễ nhận dạng rõ ràng -->

Trong javascript thì đối với những hàm được khai báo thông qua *Function Declaration* thì **cơ chế hoisting sẽ đưa cả phần khai báo và định nghĩa hàm lên đầu của đoạn code**. Điều đó đồng nghĩa với việc chúng ta có thể sử dụng hàm đó khi trước khi chúng ta khai báo nó.

foo(); // Kết quả in ra ở console sẽ là "The first"

function foo() {
  console.log("The first");
}

Function Expression được hiểu như là chúng ta có thể dùng từ khóa function để khai báo một hàm bên trong một biểu thức (Expression).


Trong javascript thì cơ chế hoisting sẽ không hoạt động khi chúng ta khai báo hàm thông qua *Function Expression* (**nói dễ hiểu hơn là phần định nghĩa hàm sẽ không được đưa lên đầu mà chỉ có phần khai báo undefined được đưa lên đầu giống như Variable Hoisting vậy**). Vì thế mà chúng ta sẽ không thể sử dụng hàm (Function Expression) trước khi định nghĩa nó.
example(); // Đoạn code này sẽ báo lỗi vì **không có cơ chế hoisting trong function expression**
var example = function(){
   console.log("Hello world!");
}

3.Arrow function

