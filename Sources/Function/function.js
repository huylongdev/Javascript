// tên hàm có thể chứa: a-z A-Z 0-9 $ và dấu gạch dưỚi '_'
// Lưu ý : 0-9 không thể bắt đầu tên hàm
function showDiablog() {
    alert('Xin chào các bạn');
}
showDiablog();
// '()' là toán tử gọi

function huylong(msg){
    console.log(typeof msg);
}

huylong(123);
// Vì tính chất private của nó , nên msg chỉ đƯợc định nghĩa ở trong function, vậy nên câu lệNh dưới đây sẽ bị báo lỗi
// console.log(typeof msg);


//có thể truyền nhiều tham số
function long(msg1, msg2){
    console.log(msg1);
    console.log(msg2);
}
long("hihi", 123);


/*
function long(){
console.log(arguments)}; long("hihi"); ( arguments có tác dụng gì , giải thích rõ , và cho ví dụ )

Trong JavaScript, arguments là một đối tượng đặc biệt được truyền vào hàm khi nó được gọi. Đối tượng này chứa tất cả các đối số được truyền cho hàm, dưới dạng một mảng.

Trong ví dụ của bạn, hàm long() không có đối số được khai báo, nhưng khi hàm được gọi với đối số "hihi", thì arguments sẽ chứa một mảng có một phần tử duy nhất, là "hihi".

Ví dụ, nếu chúng ta gọi hàm long() với hai đối số, "hihi" và "hello", thì arguments sẽ chứa một mảng có hai phần tử:


function long(){
  console.log(arguments);
};

long("hihi", "hello");

[ "hihi", "hello" ]
arguments có thể được sử dụng để truy cập các đối số được truyền cho hàm. Ví dụ, chúng ta có thể sử dụng arguments[0] để truy cập đối số đầu tiên được truyền cho hàm.

Ví dụ:

JavaScript
function long(){
  console.log(arguments[0]);
};

long("hihi");

Kết quả :hihi
arguments cũng có thể được sử dụng để kiểm tra xem hàm có được gọi với bất kỳ đối số nào hay không. Ví dụ:

JavaScript
function long(){
  if (arguments.length > 0){
    console.log("Có ít nhất một đối số được truyền");
  } else {
    console.log("Không có đối số nào được truyền");
  }
};

long();
long("hihi");

kết quả :   Không có đối số nào được truyền
            Có ít nhất một đối số được truyền*/




//VÒNG LẶP FOR

function number(){
  var string = "";
   for(var para of arguments){
      string += `${para} - `;
   }
   console.log(string);
}
number(1,2,3,4,5);


//RETURN TRONG HÀM JAVASCRIPT
// return dùng để trả về giá trị của hàm

function multiplication(a,b){
  return  a*b;
  alert();
  console.log("hello");
};
// Như đã thấy, nếu hàm đã có 1 giá trị trả về return thì  các câu lệnh sau đó sẽ không được thực hiện
var result = multiplication(20,30);
console.log(result);


// Ngoài ra chúng ta cũng có thể nối chuỗi bằng string
function toString(a,b){
  return  a.toString() + b.toString();
};
var result2 = toString(20,30);
console.log(result2);