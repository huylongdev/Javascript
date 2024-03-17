//7. reduce() - giảm mảng xuống một giá trị duy nhất
//Tính tổng coin bằng reduce
var courses3 =[
    {
        id: 1,
        name: "Docker",
        coin: 250
    },
    {
        id: 2,
        name: "Flutter",
        coin: 0
    },
    {
        id: 3,
        name: "C#",
        coin: 0
    },
    {
        id: 4,
        name: "C++",
        coin: 400
    },
    {
        id: 5,
        name: "GithubCopilot",
        coin: 500
    }
]
//Dưới đây là cách thông thườNg
// var totalCoin = 0 ;
// for(var course of courses3){
//     totalCoin += course.coin;
// }
// console.log(totalCoin);



//Reduce nhận một đối số function, và một giá trị khởi tạo( Thường là 0)
/**
 * accumulator: giá trị trả về sau mỗi lần lặp( chúng ta đã khởi tạo là 0)
 * currentValue: phần tử hiện tại
 * currentIndex: index hiện tại(index của cái currentValue)
 * originArray: mảng gốc ( TRÙNG VÙNG NHỚ VỚI COURSES3 luôn)
 */
//Dưới đây là bảng để hiển thị ra cho ta dễ phân tích:
// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++;
//     var total = accumulator + currentValue.coin;
//     console.table({
//         "Lượt index  ": currentIndex,
//         "Lượt chạy: ": i,
//         "Biến tích trữ: ": accumulator,
//         "Giá trị cộng thêm: ": currentValue.coin,
//         "Tích trữ lầN thứ:" : total,
//     });
//     return total; 
//     //initial value bằng 0 gán cho accumulator trong lần chạy đầu tiên
// }
// var totalCoin = courses3.reduce(coinHandler, 0);
// console.log(totalCoin);








//Còn đây là bản ngắn gọn nhất
var totalCoin = courses3.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin;
},0)
////Reduce nhận một đối số function, và một giá trị khởi tạo, nên phải thêm 0 vào như trên, 0 này đầu tiên nó là accumulator, và nó sẽ cộng dồn vào accumulator

//Khi không có giá trị khởi tạo ( số 0 kia kìa ), thì accumulator sẽ là phần tử đầu tiên của mảng(phần tử đầU  của mảng là kiểU gì thì nó trả về y nguyên ), và currentValue sẽ là phần tử thứ 2
console.log(totalCoin);
console.log("==========================================")










//VÍ DỤ 1: Flat - " làm phẳng " một mảng sâu(Dept Array)
var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []) // nếu để trống nó sẽ lấY phần tử đầu tiên, trả về số 1, sai kiểu dữ liệU. Vì ta muốn nó trả về một mảng, nên ta truyền vào tham số thứ 2 của reduce 1 cái mảng trống làm giá trị khởi tạo
console.log(flatArray);
console.log("================================");









// Lấy ra tất cả các khoá học và đưa vào 1 mảng mới 
var majors = [
    {
        major:"Front-end",
        courses:[
            {
                id: 1,
            title:"Tailwind"
            },
            {
                id: 2,
                title:"ReactJS"
            }
        ]
    },
    {
        major:"Back-end",
        courses:[
            {
                id: 1,
                title:"NodeJS"
            },
            {
                id: 2,
                title:"PHP"
            }
        ]
    }
]

var getCourses = majors.reduce(function (courses, topic) {
    //topic này tham chiếu đến mảng majors, và courses này tham chiếu đến mảng rỗng
    //ta có thể hiểu topic là nguyên 1 phần tử trong mảng majors, ( majors có 2 ptu)
    return courses.concat(topic.courses);
},[])
console.log(getCourses);
console.log("================================================")
















var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  
  function calculateRating (movies){
    var christopher = movies.filter(function(movie){       
    return movie["Director"] === "Christopher Nolan"
  })

    var getIMDBTotal = christopher.reduce(function(output, imdb){
        return output + parseFloat(imdb["imdbRating"])

        //Hàm parseFloat chuyển 1 string sang số thực
    }, 0)
    return getIMDBTotal / christopher.length;
}
  
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
  
  
  
  
  
  




