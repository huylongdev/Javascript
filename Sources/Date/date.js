
var date = new Date();
console.log(date);
//in trực tiếp nó ra giống như ta in nó theo kiểU String date.toString()
// Nó trả về thời gian hiệN tại

var year = date.getFullYear();
var month = date.getMonth() + 1;//Vì tháng nó sẽ bắt đầU từ 0-11, nên ta + 1 cho dễ nhìn
var day = date.getDate();


    switch (month){
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("January");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("June");
                break;
            case 7:
                console.log("July");
                break;
            case 8:
                console.log("August");
                break;
            case 9:
                console.log("September");
                break;
            case 10:
                console.log("October");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
    }

//NOTE: vì biến date vẫN thuộc phạm vi window, vậy nên ta có thể tương tác bên tab console như bên ===> ghi bên console( date.getMinutes() , date.getSeconds()   )



//in ngày tháng năm
console.log(`${day}/${month}/${year}`)