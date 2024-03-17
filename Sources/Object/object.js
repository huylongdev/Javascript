// Objects trong JS
// Sử dụng để lưu trữ thông tin của 1 đối tượng cụ thể



//Cách thêm key bằng biếN
var add = "animal";

var myInfo = {
    //Đây là một cặp key-value
    name: "Long",
    age: 19,
    city: "DaNangcity",
    [add]: "dog"
    //bây h ở đây nó sẽ hiện key là animal, vì ta truyền vào biến add tham số animal
}
//Cú pháp thêm key mới
myInfo.email = "haolong2004crtt@gmail.com";
// cách thêm thứ 2
myInfo["DoB"] ="21/10/2004";

console.log(myInfo);



// CÁCH LẤy VALUE
console.log(myInfo.email); // or myInfo["email"];



//NOTE
// Nếu ta truyền vào sau myInfo là myInfo.abc thì nó sẽ không lấy cái biếN abc mà lại đi tìm key abc ở trong biến myInfo
// Nếu muốn lấy từ biếN abc, ta sẽ truyền vào bằng cách [abc] ( tuy nhiên không dùng dấU ngoặc "" như khi lấy key, vì nó sẽ hiểu là tìm key abc trong biến myInfo)
var abc = "city";
console.log(myInfo[abc]);




//Cách xoá key
delete myInfo.email;




//Có thể lưu trữ value là 1 function ko ?
var vehicles= {
    one: "bus",
    two: "car",
    three: "train",
    //Cách lưu trữ function
    //Chữ this có nghĩa là " vehicles", tuy nhiên ta không viết vehicles , vì lỡ mai sau ta đổi tên biếN vehicles thành cái khác thì sao ?
    getName : function (){
         return this.one;
    }
}
console.log(vehicles.getName());
//Khi gọi function getName, phải thêm vào dấu () để nó hiểu là call function




//THỐNG NHẤT CÁCH ĐọC
// Functions : ==> là các phương thức/ METHODS
// OTHERS : ==> là các thuộc tính/ PROPERTIES (vì có thể lấy ra luôn)