var fullName = "Ngô Huy Long";
alert(fullName);
// Hàm alert để in thông báo ra màn hình
var age = 26;
alert(age);
// Vì mỗi thông báo chỉ đưỢc xuấT hiện một lần nên khi tắt cái fullName nó mới ra thông báo age
// JS hoàn toàn không cần dùng ' ; '

// Một cách comment hay "/** nó tự ra"
// /** */

/**
 *Giới thiệu một số hàm built-in ( hàm được JS xây dựng sẵn)
 * 1.Alert
 * 2.Console
 * 3.Confirm
 * 4.Prompt
 * 5.Set timeout
 * 6.Set interval
 */

var long = "huy long";
console.error(long);
// có thể in ra màu đỎ lỗi như hình trên
console.log("huy long");
console.warn(long);

confirm("Bạn đã đủ 18 tuổi chưa");
// Hiện ra thông báo có cancel và OK
prompt("điền tuổi của bạn");
// Hiện ra thông báo có input form

// Hàm này sẽ thực thi câu lệnh sau 1 thời gian nhất định ( đơn vị:mili giây, vì vậy 2000=2s)
setTimeout(function () {
  alert("hELLO");
}, 2000);

/**
 * setInterval là để chạy code sau một khoảng thgian, nhưng có thể lặp đi lặp lại
 * đoạn code dưới chúng ta cho nó thêm hàm Math.random() để nó random thêm một con số cho nhìn học cho dễ hiểu cốt lõi của nó
 */
setInterval(function () {
  console.log("HUY LONG" + Math.random());
}, 2000);
