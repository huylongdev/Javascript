// Create forEach function
Array.prototype.forEach3 = 1; 
//Mỗi lần ta thêm function mới vào prototype, vòng lặp kia vẫn sẽ chạy qua và hiểN thị, vì vòng lặp for in không chỉ lặP qua các phầN tử trong mảng mà còn lọc qua các phần tử mớI trong prototype mà ta mới tạo
Array.prototype.forEach2 = function(callback){
    for(var index in this){
      //Để kiểm tra xem phần tử đó có phải là phần tử của mảng không, ta sử dụng phương thức hasOwnProperty
      // console.log(index, this.hasOwnProperty(index));
      if(this.hasOwnProperty(index)){
        callback(this[index], index, this);
      } 
    }
}
var languages = [
    "NodeJS",
    "ReactJS" ,
    "AngularJS",
]
languages.forEach2(function(course, index ,array){
    console.log(course, index, array);
});
console.log(languages);
console.log(Array.prototype)
