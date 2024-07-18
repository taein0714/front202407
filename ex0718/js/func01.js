var result01 = document.getElementById("func1");
var result02 = document.getElementById("func2");
var result03 = document.getElementById("func3");
// var result04 = document.getElementById("func4");

var result05 = document.getElementById("func5");
var result06 = document.getElementById("func6");
var result07 = document.getElementById("func7");

var result;

//----------함수 선언
function line() {

    // 특정기능을 반복 사용하기 위해서

   result01.innerHTML += "<p>" + "**********" + "<p>";
    
}
line();
line();
line();
line();

// --------------------함수를 이용한 구구단--------------------------
var dan = 2;
result = 0;

function multiply(i) {
    // result02.innerHTML = result02.innerHTML + (dan * i);
    result02.innerHTML += dan + " *----- " + i + " = " + (dan * i) + "<br>";
}
for(let i = 1; i < 5; i++) {
    multiply(i)

}


// ---------------- 함수를 이용한 더하기 ---------
function add(num01, num02) {
    var hap = num01 + num02;
    result03.innerHTML += hap + "<br>";

}
add(2, 3);
add(45, 3463);
add(123685, 45690);

// --------------- 함수를 이용한 버튼 이벤트 처리 ----------
function flower(flowerName) {

    switch(flowerName) {
        case "무궁화": alert("무궁화 동호회를 추천합니다");
        break;
        case "장미": alert("장미 동호회를 추천합니다");
        break;
        case "국화": alert("국화 동호회를 추천합니다");
        break;
    }

}
// flower(flowerName)

// --------------- 함수 return -------
var first = 13;
var last = 7;

function all(a, b){
    // 함수내의 지역
    var sam = a + b;

    return sam;
}

var result = all(first, last);
result05.innerHTML += "결과값:" + result;



// ------ 함수 110 page -------------

var num = 1;

 function love(){
    var a = num + 1;
    console.log('a:', a);
    result06.innerHTML += 'a: ' + a;

 }
 love();
 console.log(num);




// console.log(result06.innerHTML);
// result06.innerHTML = "<p>ghghhg<p>";

//result06.innerHTML = result06.innerHTML + "<p>ghghhg<p>";
// result06.innerHTML += "<p>ghghhg<p>";

// ------ 함수 111 page 교재오류임.-------------

// 함수선언
function love2(){
    // var를 생략하고 사용하면 전역변수가 된다.
    str = '산';
    var strInner = '강';
    console.log("함수내에서 출력: " + str); 
    console.log("함수밖에서 출력: " + strInner); 

    return strInner;
}

// 첫번째 함수 기본콜
love2();
console.log("-------");

// 두번째 함수 콜 + return
// return된 지역변수 strInner값을 recStr에 담는다.
var recStr = love();
console.log("나는 return된 값:", recStr);
