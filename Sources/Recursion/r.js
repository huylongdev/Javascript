//Bài toán xoá phần tử trùng lặp
//Không được dùng hàm có sẵn trong js
var LCK= [
    "GENG",
    "T1",
    "GENG",
    "T1",
    "HLE",
]
console.log([...(new Set(LCK))])

/**Set là một cấu trúc dữ liệu trong JavaScript dùng để lưu trữ các giá trị duy nhất.
Khi tạo một Set từ một mảng, các giá trị trùng lặp sẽ bị loại bỏ.*/
// Nhưng output lại muốn chúng ta trả về một mảng,vậy nên ta để dấu 3 chấm đằng trước cái đÓ rồi cho tất cả vào 1 mảng []
//"..." là toán tử spread, Nó cho phép bạn "giải nén" các phần tử của một iterable object (mảng, chuỗi, Set, Map, v.v.) thành các phần tử riêng biệt.
console.log("=====================================")







// RECURSION , ĐỆ QUY
/*function recur(){
    recur();
}
recur();*/
//Vòng lặp đệ quy này sẽ chạy mãi mãi, không bao giờ dừng lại, và cuối cùng sẽ gây ra lỗi "Maximum call stack size exceeded"
// Ngốn bộ nhớ ram, vì nó xếp chồng các STack lên nhau, và không bao giờ dừng lại



//Bài toán count down
function countDown(seconds){
    if(seconds > 0){
        console.log(seconds)
        return countDown(seconds-1)
    }
    return seconds;
}
countDown(10);
console.log("======================================")








//1.Xác định điểm dừng
//2. logic handle ==> tạo ra điểm dừng
function loop(start, end, callback){
    if(start < end){
        callback(start);
        return loop(start + 1, end, callback);
        
    }
}

var array = ["a", "b", "c", "d", "a", "a", "c"];

loop(0, array.length, function(index){
    //DướI đây là lấy index của array 
    //console.log("index: ", index);
    //còn đây là lấy phần tử 
    console.log(array[index])
} );

console.log("======================================")







var arr=['a', 'b', 'c','a', 'b', 'c', "d", "a", "c", "d", "a"]
var newArr=[];
function loop(i, length, callback){
    if(i < length){
        callback(i)
        return loop(i + 1, length, callback);
    }
    return newArr;
}


console.log(loop(0, arr.length, function(e){
    if(newArr.indexOf(arr[e]) < 0) {
        newArr.push(arr[e]);
        //Khi kiểm tra thằng arr[e] , nó không thấy có trong newArr(vì lúc đầu mảng đang rỗng), khi đÓ nó return về -1, mà mỗi lần như thế , push sẽ đẩy vào, khi nào có thằng nào trùng, nó bắt đầu đếm từ 0, nghĩa là điều kiệN bé hơn 0 là để tìm ra thằng chưa có trong mảng newArr 
    }
}))

/**
 * 
Lý do indexOf trả về -1 khi chưa tồn tại và bắt đầu đếm từ 0 sau khi tồn tại
1. Cách thức hoạt động của indexOf:

Phương thức indexOf sử dụng thuật toán tìm kiếm tuyến tính để tìm kiếm giá trị đầu tiên khớp với giá trị được truyền vào. Nó sẽ lặp qua từng phần tử trong mảng và so sánh với giá trị được truyền vào.

2. Lý do trả về -1 khi chưa tồn tại:

Khi indexOf không tìm thấy giá trị khớp trong mảng, nó sẽ trả về -1.
Lý do là vì -1 không phải là một chỉ số hợp lệ trong mảng.
Việc sử dụng -1 như một giá trị đặc biệt giúp phân biệt trường hợp không tìm thấy với trường hợp giá trị khớp nằm ở vị trí đầu tiên (chỉ số 0).
3. Lý do bắt đầu đếm từ 0 sau khi tồn tại:

Khi indexOf tìm thấy giá trị khớp, nó sẽ trả về vị trí của phần tử đó trong mảng.
Vị trí của phần tử được tính từ đầu mảng, với vị trí đầu tiên là 0.
Do đó, sau khi tìm thấy giá trị khớp, indexOf sẽ tiếp tục tìm kiếm các lần xuất hiện tiếp theo của giá trị đó trong mảng và trả về vị trí tương ứng.
 */




//Làm thêm
var LCK = [
    "GENG",
    "T1",
    "GENG",
    "T1",
    "HLE",
    "DK",
    "GENG",
    "T1",
]
var filterLCK = [];

function recursion(start, length, callback){
    if(start < length){
        callback(start);
        return recursion(start + 1, length, callback);
    }
    return filterLCK;
}
console.log(recursion(0, LCK.length, function(index){
    if(filterLCK.indexOf(LCK[index]) <0){
        filterLCK.push(LCK[index]);
    }
}))


console.log("======================================")








//Giai thừa 
//Đây là ví dụ làm 1 cách easy
function factorial(num){
    var result = 1;
    for(var i = num; i >= 1; i--){
        result = result *i
    }
    return result;  
}
console.log(factorial(5));



//Cách làm factorial bằng recursion 
function factorial2(num){
    if(num >= 1){
        return num * factorial2(num - 1);
    } else {
    return 1;
    }
}
    //Khi chạy đếN num=0, giá trị đã không còn thoả mãn điều kiện, khi đÓ nó sẽ return 1, và kết thúc ( vì 0! cũng bằng 1)


    //có thể ghi như này và hồi trước Huy Long bị lú:
    /**
      if(num >= 1){
        return num * factorial2(num - 1);
    } 
        return 1;
    */
    /**giải thích Khi chương trình gặp câu lệnh if, nó sẽ kiểm tra điều kiện.
    Nếu điều kiện đúng, chương trình sẽ thực hiện các câu lệnh bên trong khối if.
    Nếu điều kiện không đúng, chương trình sẽ bỏ qua các câu lệnh bên trong khối if và tiếp tục thực hiện các câu lệnh tiếp theo.
    Khối else chỉ được thực hiện khi điều kiện trong if không được thỏa mãn.
    }*/

console.log(factorial2(7))