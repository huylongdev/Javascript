
/**
 * Toán tử số học
 * +  :cộng
 * -  :trừ
 * *  :nhân
 * ** :luỹ thừa
 * /  :chia
 * %  :chia lấy dư
 * ++ :thêm 1 giá trị
 * -- :giảm 1 giá trị
 */

var a =2;
var b =2;
if(a**b==4)
{console.log("a^b=4")}


var d=4;
d--;
alert(d);
////////////////////////////////////////////////////////////////////////////////////
/**
 * Toán tử gán
 * a += 2  tưƠng đưƠng a = a +2
 * a -= 2  tưƠng đưƠng a = a -2
 * a *= 2  tưƠng đưƠng a = a *2
 * a /= 2  tưƠng đưƠng a = a /2
 * a **= 2  tưƠng đưƠng a = a **2
 */
var c=2;
var d =3 
var e;
console.log(e = c+=d);
    /*  x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
        ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
        x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
        --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
    */      
// PREFIX là tiền tố. Postfix là hậu tố


//BÀI TOÁN GÂY LÚ
//Khi thằng hậu tố gán cho biếN copy, thì cái thằng --num đã nhận giá trị biến copy đó, ở trườNg hợp này thằng num++ là 5, còn --num nhận giá trị biếN copy là 6 nên sẽ là 6-1 =5. Vậy num++ + --num = 5 + 5 = 10
var num = 5;
var output = num++ + --num;
console.log("output:",output);


//ví dụ 2

var num2 = 10;
var output2 = ++num2 *3  + num2-- *2; 
console.log("output2:",output2);

////////////////////////////////////////////////////////////////////////////////////
//Toán tử nối chuỗi

var str1 = "huy";
var str2 = "long";
console.log(str1 +" "+ str2);

var str3 = "long";
console.log(str3+=" jinx");

////////////////////////////////////////////////////////////////////////////////////
//Toán tử so sánh 
/**
 * ==    --> bằng ( abstract equality)  ( ví dụ nếu a =1 ; b ="1" thì a==b vẫN true)
 * ===   --> tuyệt đối bằng (strict equality) (còn nếu sài ví dụ trên bằng cái này thì nó sẽ false, vì khác kiểu dữ liệu)
 * !=    --> không bằNg (abstract inequality)
 * !==   --> tuyệt đối không bằng (strict inequality)
 * >     --> lớn hơn
 * <     --> nhỏ hơn
 * >=    --> lớn hơn hoặc bằNg
 * <=    --> nhỏ hơn hoặc bằng
 */

var a = "2";
var b = 2;
if(a === b){
    console.log("Dieu kien dung");
} else {
    console.log("Khong dung");
}

////////////////////////////////////////////////////////////////////////////////////
//Toán tử boolean
var h = 2;
var j = 3;
console.log(h<j);

////////////////////////////////////////////////////////////////////////////////////
/**
 *  If - else
 * *CÁC GIÁ TRỊ TRẢ VỀ TRONG JS
 * - null
 * "",'' chuỗi rỗng
 * - 0 
 * - false
 * - undefined
 * - NaN
 */
// Giải thích: tại vì ngoài những giá trị bên trên, nếu chúng ta truyền vào điều kiện là một thứ gì đÓ không phải boolean. VD: 1,2,3,"huylong",... thì JS sẽ tự convert về thành bolean true.
var cow ="long";
if(cow){
    console.log("Dieu kien o12k");
} else {
    console.log("Dieu kien sai");
}


////////////////////////////////////////////////////////////////////////////////////
/**
 * Toán tử logical
 * 1. && = and
 * 2. || = or
 * 3. !  = not
 */
var red = 4
var blue = 5

if(!(red > blue)){
    console.log("red < blue");
}