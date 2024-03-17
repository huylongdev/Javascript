/**
 * Mảng trong Js array
 * 1. Tạo mảng
 * - Cách tạo
 * - Sử dụng cách nào tại sao
 * - Kiểm tra datatype?
 * 2. Truy xuất mảng
 * - Độ dài mảng
 * - Lấy phần tử theo index
 */
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    {},
    function() {},
    1
];
console.log(typeof languages);
// Vì khi typeof {} và [] đều trả về object, cho nên đây là cách phân biệt
console.log(Array.isArray({}));
//Chữ Array đứng trước isArray là namespace
console.log(languages.length);

//cách lấy phần tử bằng index
console.log(languages[2]);