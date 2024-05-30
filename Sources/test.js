var languages = "JS-Java-Ruby";
console.log(languages.split("-"));
// The split() method is used to split a string into an array of substrings, and returns the new array.
// ", " chính là điểm chung giữa các phần tử trong mảng mới, nếu không có thì nó sẽ cắt từng ký tự một như bên dưới.
console.log(languages.split("")); // vì nó coi khoảng rỗng là điểm chung
console.log("When your legs don't work like they used to before
")