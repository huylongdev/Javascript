/**
    forEach() - duyệt qua từng phần tử của mảng
    every() - kiểm tra các phần tử của mảng phải thỏa mãn một điều kiện nào
    đó và trả về kiểu boolean
    some() - ngược lại với every chỉ cần một phần tử đúng sẽ trả về
    boolean true
    find() - tìm kiếm một phần tử trong mảng
    filter() - tìm kiếm tất cả các phần tử thoả mãn trong mảng
 */


var courses = [
    {
        id: 1,
        name : "JavaScript",
        coin : 250
    },
    {
        id: 2,
        name : "HTML & CSS",
        coin : 0
    },
    {
        id: 3,
        name : "Ruby",
        coin : 0
    },
    {
        id: 4,
        name : "PHP",
        coin : 400
    },
    {
        id: 5,
        name : "ReactJs",
        coin : 500
    },
    {
        id: 6,
        name : "ReactJs",
        coin : 500
    },
    {
        id: 7,
        name : "ReactJs",
        coin : 500
    }
];
//1. forEach
//Một vòng lặp duyệt qua các phần tử 
//syntax : array.forEach(function(currentValue, index, arr), thisValue)

courses.forEach(function(course, index, arr){
    console.log(index, course );
})

console.log("=====================================")







//2.every() - kiểm tra các phần tử của mảng phải thỏa mãn một điều kiện nào
//đó và trả về kiểu boolean

//Bài toán kiểm tra xem tất cả khoá học có miễn phí không
var isFree = courses.every(function (course, index){
    console.log(course);
    //Nó kiểM tra thằng đầu đã sai luôn rồi nên nó dừng luôn, vậy nên chỉ có một index = 0 đƯợc duyệt qua
    return courses.coin === 0;  
});
console.log(isFree);
console.log("=====================================")
    
var arrayyyy = [
    {
        name: 'Bóng rổ',
        like: 0
    },
    {
        name: 'Bơi lội',
        like: 0
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]


var isUnderrated = arrayyyy.some(function(course){

    if (course.like === 0){
        console.log("Underrated team: ",course.name);
    }
    return course.like === 0;
})
console.log(isUnderrated);







//3.   some() - ngược lại với every chỉ cần một phần tử đúng sẽ trả về true
// Cũng giống như every là việc chỉ cầN kiếm một thằng đúng là nó dừng luôn (every lầ sai là dừng)












//4. find() - tìm kiếm một phần tử trong mảng
var findCourse = courses.find(function(course, index) {
    return course.name=== "ReactJs";
})
console.log(findCourse);
//Cũng giống hai thằng kia, nó cũng dừng khi tìm thấy phần tử đầu tiên thoả mãn

console.log("=====================================")








//5. filter() - tìm kiếm tất cả các phần tử thoả mãn trong mảng
//Cũng giống thằng find, nhưng nó lấy tất cả các phần tử thoả mãn luôn
var listCourse= courses.filter(function(course, index) {
    return course.name=== "ReactJs";
})
console.log(listCourse);


console.log("=====================================")



//EXAMPLE in ra những like >5
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(sportArray){
    var mostVoting = sportArray.filter(function(course){
        return course.like > 5
    })
    return mostVoting;
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]



console.log("=====================================")









//6. map() - tạo ra một mảng mới từ mảng cũ
var courses2 =[
    {
        id: 1,
        name: "NextJS",
        coin: 250
    },
    {
        id: 2,
        name: "ThreeJS",
        coin: 0
    },
    {
        id: 3,
        name: "Angular",
        coin: 0
    },
    {
        id: 4,
        name: "MongoDB",
        coin: 400
    },
    {
        id: 5,
        name: "Github",
        coin: 500
    }
]
//Trong map có một vòng lặp, nó lặp qua mọi phầN tử trong mảng, mỗi lần lặp nó call đến 1 function để thực thi, tạo sự thay đổi,...(Mỗi lần lặp nó tạo ra một phần tử mới và đẩy vào mảng mới)
//phải truyền vào map 1 đối số là function
function courseHandler(course, index){
    //NếU ta làm như sau thì nó chả khác nào mảng cũ:
    //return course;
    //Tương tự 1 vài ví dụ:
    //return 123;
    //returm courses.name;
    return{
        index,
        id: course.id,
        name:`Khoa hoc ${course.name}` ,
        coin:`Bitcoin: ${course.coin}$`,
        contact: "https://f8.edu.vn",
        originArray: courses2,
        //Cách để thêm và mảng cũ, add hẳn value vào key đÓ luôn
    }
}
var newCourses = courses2.map(courseHandler)
console.log(newCourses)
console.log("=====================================")
