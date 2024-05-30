/**
 * Các kiểu phương thức của Array :
- toString() : chuyển mảng thành chuỗi

- join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử

- pop() : xóa phần tử "cuối" mảng và trả về "phần tử" đó

- push() : thêm phần tử vào "cuối" mảng và trả về "độ dài mảng mới"

- shift() : xóa phần tử "đầu" mảng và trả về "phần tử "đó

- unshift() : thêm phần tử vào "đầu" mảng và trả về "độ dài 
mảng mới"

- splice() : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm

- slice() : lấy ra một phần mảng mới từ mảng cũ

- concat() : nối mảng mới vào mảng cũ

- reverse() : đảo ngược mảng

- sort() : sắp xếp mảng
 */

var languages = ['Java', 'C#', 'PHP', 'JavaScript'];
console.log(languages.toString());
console.log(languages.join(' - '));
// toString() : Sẽ tự convert sang String và ngăn cách giữa các phần tử bằng dấu phẩy
// Nếu muốn ngăn cách bằng các thứ khác thì dùng join()



var handsome = [
    'chovy',
    'PSJ',
    'CILLIAN MURPHY',
]
// pop() xoá phần tử "cuối" mảng và trả về phần tử đó
// NOTE: Khi xoá hết thì nó ra undefined
console.log(handsome.pop());
console.log(handsome);



var animal = [
    "coyote",
    "cat",
]
// Push() thêm phần tử vào cuối mảng và trả về độ dài mảng mới
console.log(animal.push("horse", "dog"));
console.log(animal);







var LCK = [
    "GENG",
    "T1",
]
// shift() xoá phần tử đầu mảng và trả về phầN tử đó
console.log(LCK.shift());
console.log(LCK);








var LPL = [
    "BLG",
    "JDG",
]
// unshift() thêm phần tử vào đầu mảng và trả về độ dài mảng mới
console.log(LPL.unshift("EDG"));
console.log(LPL);





var vehicles = [
    "car",
    "motorbike",
    "bicycle",
]
console.log(vehicles.splice(1,1));
//Tham số 1: vị trí cần xoá ( Nó đặt con trỏ chuột trước phầN tử số index đÓ)
// tham số 2: số lượng phần tử cần xoá ( NếU đặt là 0 nó sẽ không xoá cái gì, việc này giúp chúng ta chèn phần tử như ví dụ 2)
// Tham số 3(từ thứ 3 trở đi): phần tử muốn chèn vào vị trí đó
console.log(vehicles);

// VÍ DỤ 2
console.log(vehicles.splice(1,0,"tank", "bus"));
console.log(vehicles);





var fruit1 = [
    "apple",
    "banana",
]
var fruit2 = [
    "mango",
    "orange",
]
console.log(fruit1.concat(fruit2));

//concat() : nối chuỗi, hợp vào chuỗt thứ nhất(là fruit1)






var countries = [
    "VietNam",
    "Japan",
    "Finland",
    "Korea"
]

console.log(countries.slice(1,2));
// Tham số thứ nhất bắt đầu từ đầu index 1 là Japan, sau đÓ inđex thứ 2 là 2 nên nó sẽ trỏ chuột ra đầu Finland, điềU này có nghĩa là nó chỉ cắt mỗi Japan ra
// Nếu ta chỉ truyền vào 1 tham số thì nó sẽ cắt từ vị trí đó đến hết mảng


