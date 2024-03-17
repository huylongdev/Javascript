/**
 * Kiểu dữ liệU trong JavaScript
 * 1. Dữ liệu nguyên thuỷ (primitive data type)
 * - Number
 * - Boolean
 * - String
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2. Dữ liệu phức tpạ (complex data type)
 * - Object
 * - Function
 */

// Number type
// var a = 1 ;


// String type
// Dấu '\' có tác dụng cho chúng ta có thể thêm '"' vào trong câu, tất nhiên khi thực thi nó chỉ hiện ra ' dep " trai '
 var long = "dep \" trai";
 console.log(long);


 // Boolean type
 // Thường thường khi đặt tên biến cho giá trị boolean, ngta hay dùng prefix "is" hoặc "has"...
 var isSuccess= true;
 

 // Undefined type
 /**
    * Một biến được khai báo nhưng chưa được gán giá trị.
    * Một biến được truy cập nhưng không được khai báo.
    * Một hàm trả về một giá trị không xác định.
  */
 var undefinedVar;


 // Null type
 // Null means nothing :))
 var nullVar = null;


 // Symbol type
 // ThằNg symbol có tính unique nên dù so sánh bằng nhau thì vẫn là wrong
 var id = Symbol("id"); //unique identifier
 var id2 = Symbol("id");//unique identifier
 console.log(id==id2);


 // Function type
 var myFunction = function(){
  alert("Hello World!");
 }

 

//Object type
// Cách nhau bằng dấU phẩy, khai báo bằng dấu ":"
// Bên trái là key, bên phải là value
var myObject = {
  Name : "Long",
  Age  : "19",
  Address : "DaNangcity",
  myFunction : function(){

  }
};
console.log("myObject", myObject);

//Array cũng là kiểu Object
//Array không cần địNh nghĩa key ( dùng trong trường hợp định nghĩa 1 danh sách nào đó)
// Bản chất nó vẫn có key, nhưng nó đc đánh tự động, số tự tăng
// Array đi cùng một cặp ngoặc vuông ( đây là dấu hiệu nhận biết)
var myArray = [
  "Long",
  "19",
  "DaNangcity"
];
console.log("myArray", myArray); 


//////////////////////////////////
// Cách kiểm tra data type
console.log(typeof myArray);
console.log(typeof myFunction);
console.log(typeof id);
//Đây có thể coi là một bug của JS khi type của null lại là object :)) hài vãi
console.log(typeof nullVar);




//!!!!!!!!!!!!!Note: kết quả trả về của typeOf luôn là một string
// ví dụ này cho ta thấy biến huhu đã typeOf thằng haha và cho ra kết quả là string ( mặc dù kiểu của haha là number vì nó lấy kiểU từ hihi)
var hihi = 1;
var haha = typeof hihi;
var huhu = typeof haha;
console.log(typeof huhu);



//Toán tử so sánh phần 2
// "===" thằng này nó còn so sánh cả data type và value, trong khi đÓ "==" chỉ so sánh mỗi value
var n ="1";
var m = 1;

console.log("ketqua",n!==m);

console.log(!1);


////// Toán tử logical và câu lệnh điều kiện if

// biểu thức so sánh thì trả về boolean, tuy nhiên logical thì không
// Toán tử && sẽ trả về giá trị ĐẦU TIÊN SAI, nếu tất cả đều đúng thì nó sẽ trả về GIÁ TRỊ CUỐI CÙNG
// ví dụ var a = 2<3 && 1<0 ; thì sẽ ra false, tuy nhiên ở đây nó xét vế đầU không phải là 1 trong 6 falsy, vì vậy nên nó kiểm tra thằng thứ 2 ra false, nó lấY luôn giá trị của vế 2 ( chứ không phải false là của cả 2 vế như chúng ta nghĩ)

var result = 0 && NaN && NaN && NaN ;  
console.log("result",result);
//==> nó sẽ xét từng thằng , thằng nào mà là 1 trong 6 falsy, nó sẽ in ra giá trị thằng đó
//==> nếu tất cả đều đúng(truthy) thì nó sẽ in ra giá trị của thằng cuối cùng
//==> nếu tất cả đều sai(falsy) thì nó sẽ in ra giá trị của thằng sai đầu tiên

//"||" thì ngược lại, nó sẽ trả về giá trị đầu tiên đúng(truthy), nếu tất cả đều sai(false) thì nó sẽ trả về giá trị cuối cùng
// ex: var a = 'A' || NaN ; thì sẽ ra true, vì nó gặp thằng đầu tiên không phải 1-6falsy, nên nó lấy luôn giá trị của thằng đó 
