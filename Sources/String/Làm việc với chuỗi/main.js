//## LÀM VIỆC VỚi CHUỖI

var myString = "Học JS tại f8 JS JS JS JS JS 123456" ;

// 1. Length
console.log(myString.length);

console.log("========================================");


// 2. find index
console.log(myString.indexOf('JS'));
// nếu đưa ra một ký tự không có trong chuỗi thì sẽ trả về -1
// Nó sẽ trả về position của ký tự đầu tiên, nếu có nhiều ký tự giống nhau
console.log(myString.indexOf('JS',14));
// Nếu muốn tìm một thằng khác thằng đầu tiên, indexOf hỗ trợ tham số thứ 2 là vị trí bắt đầu tìm kiếm. Ví dụ nếu ta để số 14 thì nó sẽ bắt đầu từ vị trí index 14, khi đó output là 14 chứ không phải 4 nữa.
// CÓ THỂ HIỂu , THAM SỐ THỨ HAI TRONG indexOf chính là điểm xuất phát luôn, vậy nên nếu có giá trị nào cầN tìm ở ngay second parameter. Thì nó vẫn nhận thằng đó;

console.log(myString.lastIndexOf('JS'));
// trả về thằng cuối 

console.log(myString.search('JS'));
// Thằng này cũng same indexOf một tý, tuy nhiên nó luôn bắt đầu từ đầu chuỗi, không có tham số thứ 2 như indexOf
// Nó dùng tìm kiếm theo biểU thức chính quy ( mai sau học )



console.log("========================================");



// 3. Cut string
console.log(myString.slice(7,10));
// 7 là vị trí bắt đầu, 10 là vị trí kết thúc, nó sẽ cắt từ vị trí 7 đến vị trí 10, nhưng không bao gồm vị trí 10 ( điểm kết thúc không lấy)
console.log(myString.slice(7));
// console.log(myString.slice(0));
// Chỉ định điểm bắt đầu, nó sẽ cắt từ vị trí 7 đến hết chuỗi
console.log(myString.slice(-3,-1));
// Có thể cẳt từ cuối chuỗi, nếu muốn cắt từ cuối chuỗi thì ta dùng số âm, nó sẽ cắt từ vị trí -3 đến vị trí -1, nhưng không bao gồm vị trí -1 . ( vị trí kết thúc của cái đÓ không có số 0, ví nếU ghi số 0 nó sẽ hiểu là phầN tử đầU tiên chuỗi, trong khi ta đang muốn cắt theo kiểu ngược lại)
// ==> vậy nên ta có thể hiểU rằng phần tử cuối KHÔNG LẤY ( phần tử -1 là 6 ), nên nó chỉ lấy đến phần tử -2 là 5 thôi, nên nó sẽ trả về 45.
console.log("========================================");





// 4. Replace
var string2 = "đẹp trai kẹp 2, đẹp trai quá";
console.log(string2.replace('đẹp','xấu'));
// Như chúng ta thấy nó chỉ thay đổi chữ 'dep' đầu tiên, nếu muốn thay đổi tất cả thì ta dùng biểu thức chính quy ;
console.log(string2.replace(/đẹp/g,'xấu'));
// Đó chính là cách dùng biểu thức chính quy ==>   /string/g
console.log("========================================");






// 5. Convert to uppercase
var string3 = "I got hundred problems and those are including u";
console.log(string3.toUpperCase());
console.log("========================================");




// 6. Convert to lowercase
// console.log(string3.toLowerCase());
console.log("========================================");




// 7. Trim
var string4 = "    JS is so easy     ";
console.log(string4.trim());
// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string.
console.log("========================================");





// 8. Split
var languages = "JS, Java, Ruby";
console.log(languages.split(", ").join("--/delimiter/--")); //Join works with array, so we need to split it first
// The join() method creates and returns a new string by combining all of the elements in an array( with new delimiter ).
// The split() method is used to split a string into an array of substrings, and returns the new array.
// ", " chính là điểm chung giữa các phần tử trong mảng , nếu không có thì nó sẽ cắt từng ký tự một như bên dưới.
console.log(languages.split("")); // vì nó coi khoảng rỗng là điểm chung
console.log("========================================");





// 9. Get a character by index

var lyrics = "when ur legs dont work like they used to before";
console.log(lyrics.charAt(20));
console.log(lyrics.charAt(50));
// Nếu ghi vào một index out limit thì nó sẽ return về empty string ''
console.log(lyrics[50]);
// Chúng ta cũng có thể dùng giấu ngoặc vuông để lấy giá trị
// Tuy nhiên nếu ghi vào một index out limit thì nó sẽ return về undefined, chứ không phải trả về 1 chuỗi rỗng


