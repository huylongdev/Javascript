function identity(firstName, lastName, sex){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;

    this.fullName = function(){
        return `${this.firstName} ${this.lastName} `;
        // Chữ this này chính là khi mà ta gọi đến hàm trên, thì this sẽ là object tương ứng nếu ta gọi ( nếu owner.function() thì this là owner, và storeClerk as well)
    }

}
// ở trên chỉ là 1 bản thiết kế, không phải là 1 đối tượng 
// DướI đây mới chính là 2 đối tượng được tạo ra từ bản thiết kế trên
var owner = new identity("Long","Ngo", "male");
var storeClerk = new identity("Jihyun","Jeong", "female");
//Tuy 2 đối tượng trên đƯợc tạo ra từ 1 bản thiết kế. Nhưng chúng ta có thể add thêm method hoặc property cho mỗi Object sau  khi được khởi tạo từ Constructor. Nó hoàn toàn riêng lẻ
owner.options = "Store clerk management !";
storeClerk.salary = "10.000.000$";
// Đây là 2 thuộc tính mới đƯợc thêm vào 2 object riêng biệt mà chỉ mỗi object đÓ mới có thuộc tính đó


console.log(owner);
console.log(storeClerk);
console.log(owner.fullName());
console.log(storeClerk.fullName());
