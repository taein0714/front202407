// 글로벌 == 전역
var i = 30;
var j = 15;
// var d1 = document.getElementById("cal1").innerHTML;

window.onload = function (){

    // 삼향연산자
    // (조건) ? 참일 때 수행 : 거짓일 때 수행;
var result = (i < j) ? "i가 j보다 작다" : "j가 i보다 작다";
// var result2 = (i < j) ? 'd1.innerHTML = "i가 j보다 작다" : d1.innerHTML = "j가 i보다 작다"';

console.log(result);


    //  연산자우선순위
    /*------------------
    1. __ 수학에서 ()가 최우선순위 연산하는 것과 같다.
    1. ()

    2.__ 괄호안에 있는 사칙연산을 수행 중에 증감연산자를 만나면 증감연사자를 우선적으로 연산한다.
      __ 하지만, 후행연산자는 이미 연산하였지만, 특성 상 사칙연산을 끝나고 감소증가를 하게 된다.
    2. 증감연산자 ++ --
    3.__ 기본적으로 ()안의 사칙연산 수행
    3. 사칙연산
    4.__ 이미 계산이 끝난 값들에 대해서 비교한다.
    4. 비교연산자
    5.__ 계산된 결과값을 변수에 담아준다.
    5. 대입연산자
     ------------------------*/

    var num = 5;
    var sum = 15;
    var result2 = ++num <= sum * 5;
    console.log(result2);

}