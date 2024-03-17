// Math object

//không phải là 1 constructor. không khởi tạo với từ khóa New Math

//sử dụng để truy xuất những thuộc tính VD: Math.

//Math.PI 
console.log(Math.PI);

console.log(Math.round(4.5)); //làm tròn số như bình thường

console.log(Math.abs(-20)) //giá trị tuyệt đối 

console.log(Math.ceil(9.1));//làm tròn trên 

console.log(Math.floor(9.99999)) //làm tròn dưới

console.log(Math.random()); //trả về dãy số thập phân nhỏ hơn 1 , mỗi lần reset lại trang thì nó sẽ trả về 1 số 

Math.min() //lấy ra số nhỏ nhất console.log(Math.min(-100, 1, 3, 4))

Math.max() //lấy ra số lớn nhất sonsole.log(Math.max(100, 3, 4, 5))








//MỘT CÁCH LÀM RANDOM TRONG 1 KHOẢNG CHO TRƯỚC
//ví dụ từ 1 tớI 100
console.log(Math.floor(Math.random() * 101));





//Một ví dụ về cách random phần thưởng
var random = Math.floor(Math.random() * 5);
//vì sẽ có trườNg hợp random ra ví dụ 0.1 * 5 sẽ floor ra 0 . Vậy nên trườNg hợp ra 10 coins vẫN cứ là ok
var array  = [
    "10 coins ",
    "20 coins ",
    "30 coins ",
    "40 coins ",
    "50 coins ",
]
console.log(array[random]);






//Thêm 1 ví dụ về cách random ví dụ vật phẩm cao thì sẽ hiếm % 
var random2 = Math.floor(Math.random() * 101);

var probabilities = [
    {
      name: "Anthony",
      probability: 100,
    },
    {
      name: "Nunez",
      probability: 70,
    },
    {
      name: "Messi",
      probability: 50,
    },
    {
      name: "Halland",
      probability: 20,
    },
    {
      name: "Mbappe",
      probability: 5,
    },
  ];
  
var chosenPlayer;

if (random2 <= probabilities[0].probability && random2 > probabilities[1].probability) {
  chosenPlayer = probabilities[0].name;
    } else if (random2 <= probabilities[1].probability && random2 > probabilities[2].probability) {
        chosenPlayer = probabilities[1].name;
    } else if (random2 <= probabilities[2].probability && random2 > probabilities[3].probability) {
        chosenPlayer = probabilities[2].name;
    } else if (random2 <= probabilities[3].probability && random2 > probabilities[4].probability) {
        chosenPlayer = probabilities[3].name;
    } else {
        chosenPlayer = probabilities[4].name;
}

console.log(chosenPlayer);