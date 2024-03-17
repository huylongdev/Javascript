console.log("================================================")
console.log("$$=====BÀI 2 PROTOTYPE=====$$")
function Animal(dog){
    this.dog = dog;
}


// var zoo = new Animal("gaau");
// Animal.cat = "meow";
// console.log(zoo.cat);
//Khi ta gọi đến thuộc tính cat trong object zoo như trên, nó sẽ hiện không tồn tại(undefined) vì nó chỉ tồn tại trong Constructor Animal chứ không tồn tại trong object zoo


//2.Prototype
//Prototype là 1 object chứa các thuộc tính và phương thức mà tất cả các object khác có thể truy cập đến.

var zoo = new Animal("gaau");
Animal.prototype.cat = "meow";
console.log(zoo.cat);


//Khi thêm một thuộc tính cat vào thì nó sẽ không hiện trong object zoo nhưng nó sẽ hiện trong __proto__ của object zoo (ở phần dev tool console)
console.log(zoo);



//Chúng ta cũng có thể thêm một phương thức bằNg prototype
Animal.prototype.security = function(){
    return this.cat;
}
//chữ this bên trên: khi đối tượng nào call đến method này thì nó sẽ trả về giá trị của thuộc tính cat của "đối tượng" đó

console.log(zoo.security());




