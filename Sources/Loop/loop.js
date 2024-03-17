/**
VÒNG LẶP - LOOP
1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/


//1. for loop
for(var i = 1; i<=100; i++){
    console.log("hello");
}





// Làm bài
function getRandNumbers(min, max, length){
    var array = [];

    if(min >= max){
        throw new Error("Error: unexpected input (expected Min < Max")
    }


    for (var i = 0 ; i < length ; i++){
        array[i] = Math.floor(Math.random() * (max - min) + min + 1);
        // Mình+1 cho dễ ra 10 hơn
    } 

    return array
}
const min = 1;
const max = 10;
const length = 3;
const example = getRandNumbers(min, max, length)
console.log(example)







// 2. For loop phần 2
//CHúng ta có thể hoàn toàn tách thằng var i = 0 ra như dưới ( nhớ là vẫn phải thêm " ; ")
// var i = 0;
// for(;i<=100;i++){
//     console.log(i);
// }
// Nếu xoá luôn thằng thứ 2 là "i<=100" thì nó sẽ lặp vô hạn, trình duyệt sẽ đi luôn :))) ( hoặc là cho điều kiện là true)






//Bài tập
function getTotal(array){
    var sum = 0;
    for(var i = 0; i< array.length; i++){
        sum+= array[i];
    }
    return sum;
}
const example3 = [1,3,6,7];
console.log(getTotal(example3));



console.log("===============================================")


//3.Loop phần 3
var languages = [
    "Javascript",
    "PHP",
    "Ruby",
    "Python",
]
console.log(languages[0]);
console.log(languages[languages.length-1]);
//Bên trên là cách lấy ra phần tử đầu và phần tử cuối
console.log("===============================================")
//Ví dụ ta có một mảng, ta hiện mảng đÓ ra, ta muốn dù ta có sửa code để thêm bao nhiêu phần tử vào mảng thì vẫn tự hiện ra:
var totalArray = languages.length;
for(var i = 0; i < totalArray; i++){
    console.log(languages[i]);
}

//Note: viết một cách trực tiếp languages.length vào vòng lặp cũng được, tuy nhiên nó sẽ chạy mỗi lần lặp (mỗi lần lại đi chọc vào thằng languages để tính length), nên nó sẽ chậm hơn một chút ( không hiệu quả về performance)
//NOTE:  Vậy nên nếu gán biếN cho nó sau đÓ dùng cái biếN đó, thì mỗi lầN lặp no sẽ không phải tính lại length nữa.
//Tuy nhiên bây giờ nhiều trình duyệt nó cũng thông minh, nó sẽ tự tối ưu hóa giúp mình, nên không cần phải quá lo lắng về vấn đề này nhiều lắm








console.log("===============================================")
//4. For/in loop (Lặp qua key của đối tượng)
var myInfo ={
    name: "Long",
    age: 19,
    address: "Hanoi",
}
//đây là cách để hiện ra value bằng key :console.log(myInfo['name'])
for (var key in myInfo){
    console.log(key)
    console.log("'"+ myInfo[key] + "'")
    //Ở trên là cách lấy ra key và value của key
}


console.log("===============================================")
//Ví dụ for in với mảng
var languages3 = [
    "Javascript",
    "PHP",
    "Ruby",
    "Python",
] 
//key của mảng là index của mảng
for (var key in languages){
    console.log(key)
    console.log(languages[key])   
}
console.log("===============================================")
//ví dụ for in về string
var myString = "Java";
//Trường hợp này thì key sẽ là index của string
for (var key in myString){
    console.log(myString[key]);
}
console.log("===============================================")
//BÀI TẬP
function run(object) {
    var array = [];
    for(var key in object){
        array.push("Thuộc tính "+ [key] + " có giá trị " + object[key])
    }
    return array;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]








console.log("===============================================")
//5. For/of loop (Lặp qua phần tử của mảng)(Lặp qua chữ cái 1 chuỗi)
//Nếu muốn lặp qua object thì phải biếN đổi thêm
var languages4 = [
    "Nodejs",
    "Nextjs",
    "Threejs",
    "Vuejs",
]

for (var value of languages4){
    console.log(value);
}
console.log("===============================================")
//Ví dụ về for of với object
var myInfo2 ={
    name: "Chovy",
    age: 24,
    address: "Korea",
}
//Để lặp qua object thì phải biến đổi như sau:
//console.log(Object.keys(myInfo2)); Như chúng ta thấy câu lệNh này trả về các key của object trong một mảng
//Khi đó ta có thể dễ dàng thêm nó vào vòng lặp này

for(var value of Object.keys(myInfo2)){
    console.log(myInfo2[value])
}
//Giải thích: Object.keys(myInfo2) sẽ trả về một mảng chứa các key của object, sau đó ta lặp qua mảng đó, và lấy ra value của key đó trong object ()

for(var value of Object.values(myInfo2)){
    console.log(value)
}
//Còn bên trên là ta duyệt luôn qua các values và hiện luôn value
// NOTE: Object.value() và Object.keys() là hai hàm có sẵN của object, nó sẽ trả về một mảng chứa các key hoặc value của object








console.log("===============================================")
//6.While loop
var array4 = [
    "Nodejs",
    "Nextjs",
    "Threejs",
    "Vuejs",
]

var i = 0;
while (i <  array4.length){
    console.log(array4[i])
    i++;
}







console.log("===============================================")
//7. Do/while loop
// Do while luôn chạy trong lầN đầU tiên, lầN thứ 2 mới kiểm tra giá trị ở while
var i = 0;
do{
    i++;
    console.log(i);
}while(i<0)
//Dù điều kiện sai, nó vẫn chạy 1 lần
console.log("===============================================")
//Ví dụ về nạp thẻ nếu true thì nạp thẻ 1 lần. nếU false thì cho thử thêm 3 lầN
var i = 0 ;
var isSuccess = false;
do{
    i++;
    console.log("Nạp thẻ lần " + i);
    if(true){
        //Vì nó luôn đúng nên câu lệnh trong đây luôn được thực thi
        //Đổi thành if(false) thì ngược lại
        isSuccess = true;
    }
}while(!isSuccess && i<=3)









console.log("===============================================")
//8. Break và continue
//Break: dùng để dừng vòng lặp
for(var i = 0; i<5; i++){
    console.log(i);
    if(i >= 3){
        break;
    }
}
console.log("===============================================")
//Continue: Dùng để bỏ qua 1 lần lặp
for(var i = 0; i<10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i);
}
console.log("===============================================")








//9. nested loop (vòng lặP lồng nhau)
var array8 = [
	[1,2,3],
	[4,5],
	[6,7,8,9,10],
];
for(var i = 0; i< array8.length; i++){
	for(var j = 0; j < array8[i].length; j++){
		console.log(array8[i][j]);
	}		
}





console.log("============================================")
//Thêm ví dụ về vòng lặP lùi và vòng lặp cách 1 số bất kỳ
for(var i = 50; i > 0; i-=5){
    console.log(i);
}