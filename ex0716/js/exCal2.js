
// 전체 페이지를 다 읽고 난 다음에 실행된다.
window.onload = function() {
// AND조건 &&
//  OR조건 ||
// not조건 !

// ----- 저장되어있는 값
var id = "main";
var pw = "A0123";

// ----- 사용자가 입력한 값
var userId = "main";
let userPw = "A0123";

var result = (id === userId) && (pw === userPw);

console.log(result);



window.onload = function () {


 result = ((classA > 70)) || ((classB > 70));
 console.log(result);

}