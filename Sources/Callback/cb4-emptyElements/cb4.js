// Đây là 1 trường hợp không make sense
var courses = [
    "Javascript",
    "PHP",
    
]
courses.length = 10;
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i])
}
//Như cửa sổ console đã cho ta thấy, nó show ra 2 phần tử đầu tiên của mảng courses, còn 8 phần tử còn lại thì nó show ra undefined. Điều này là do mảng courses chỉ chứa 2 phần tử, còn 8 phần tử còn lại là empty elements.
//Vì vậy vòng lặp đó không make sense khi cho i < courses.length, vì nó sẽ chạy qua các empty elements và show ra undefined. Để tránh trường hợp này, ta nên sử dụng hàm forEach() hoặc hàm for...of , for...in,.... để tránh trường hợp này.
console.log("====================================");







//Nó chỉ lặp qua đúng 2 phần tử mặc dù mảng languages có length là 100
var languages = [
    "NodeJS",
    "ReactJS" 
]
languages.length = 100;
for (var index in languages){
    console.log(index);
    console.log(languages[index]);
}
console.log("====================================");










//Một số lưu ý

var demo1 = new Array(10);
console.log(demo1);

var demo2 = new Array(10,2);
console.log(demo2);
//Như các bạn đã thấy nếU ta chỉ để 1 tham số trong hàm Array thì nó sẽ tạo ra 1 mảng với length là tham số đó, còn nếu ta truyền nhiều tham số vào hàm Array thì nó sẽ tạo ra 1 mảng với các phần tử là các tham số đó.