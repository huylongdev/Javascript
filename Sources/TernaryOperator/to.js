var course = {
    name:"javascript",
    price:500
}

if(course.price > 0){
    console.log(`${course.price} coins `)
}else{
    console.log("Free")
}

//Đó là cách thông thường, bây h ta sẽ dùng toán tử ba ngôi ( ternary operator)


var course2 = {
    name:"Nodejs",
    price:10000
    
}

var result = course2.price >0 ? `price: $skibidi${course2.price} $` : " FREE";

console.log(result);