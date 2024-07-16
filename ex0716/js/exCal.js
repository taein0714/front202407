// 변수 선언
var num01 = 10;
var num02 = 20;
var num03 = 3;
var result;

// document.getElementById("cal").innerHTML = num01;

document.write(num01);

// -----------백틱사용법

var num1 = 5, num2 = 6;
var result2 = '1문항의 답은 ${num1 + num2} 입니다';
d.getElementById("cal5_01").innerHTML = result2;

// -----------비교연산자
var comA = 20; comB = 10, comC = "10";
var result3;

result3 = '1.크다: comA가 comB보다 크다 ${comA > comB}';
d.getElementById("cal6_01").innerHTML = result3;

result3 = '2.작다: comA가 comB보다 작다 ${comA < comB}';
d.getElementById("cal6_01").innerHTML = result3;

result3 = '3.같다: C와 같다 ${comB == comC}';
d.getElementById("cal6_01").innerHTML = result3;

result3 = '4.타입까지 다 같다: C와 같다 ${comB > comC}';
d.getElementById("cal6_01").innerHTML = result3;

result3 = '5.타입까지 다 같지 않다: C와 같다 ${comB !== comC}';
d.getElementById("cal6_01").innerHTML = result3;



