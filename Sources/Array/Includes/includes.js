//Includes method
//Includes có ở Array và String ( check ví dụ dưới )
//Tham số thứ 2 là điểm xuất phát để tìm
var quote = "Discipline beat motivation";
console.log(quote.includes("b",11));
//Với chuỗi, thì nó đánh index trong 1 chuỗi

const LCK = ["T1", "GENG", "DK", "HLE", "KT"];
//Với mảng, thì tham số thứ 2 của includes là index, khi đÓ nó kiểm tra từ index đó trở đi. Và ví dụ nếu ta tìm một chữ G thì cũng ko đÚng, cả GENG nó mới lấY là true
console.log(LCK.includes("G",1));