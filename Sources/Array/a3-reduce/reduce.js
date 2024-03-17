///Cùng tạo ra reduce2 (giống hàm reduce của js)
 Array.prototype.reduce2 = function (callback, results){
    let i = 0; 
    if (arguments.length < 2){
        i = 1;
        results = this[0];
    };
    
    for ( ; i < this.length; i++){
        results = callback(results, this [i], i, this);
    };
    return results;
};
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total, number) => {
    return total + number;
});
console.log(result);












console.log("================================")
//convert 1 mảng sang object
function arrToObj(array){
    return array.reduce(function(object, keyValue){
        object[keyValue[0]] = keyValue[1]
        return object;
    }, {});
}
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }



/**
 * keyValue là ['name', 'Sơn Đặng']
keyValue[0] là 'name'
keyValue[1] là 'Sơn Đặng'
object['name'] được gán giá trị 'Sơn Đặng'

Vòng lặp thứ hai:
keyValue là ['age', 18]
keyValue[0] là 'age'
keyValue[1] là 18
object['age'] được gán giá trị 18
 */
