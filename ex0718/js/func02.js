// 기본 함수
function fun (){
    // test
}
fun();

// 익명 함수
var all = function(a,b) {

    var result;
    // 둘 중에 더 큰 값을 찾기.
    a > b ? result = "a": result = "b";

    return result;

}

console.log(all(7, 10));

// 함수의 화살표 문법
// 1. 매개변수가 없을 때

const func1 = () => {
    console.log("func1");

}

// 2. 매개변수가 1개 있을 때

const func2 = (a) => {
    console.log("func2");
    console.log(a);
}
func2("welcome");

// 3. 매개변수가 2개 있을 때
const func3 = (a, b) => {
    console.log("func3");
    console.log(a, b);
}

func3("welcome!", "korea")

// 4. 화살표 단축형
const func4 = (a, b) => console.log("01. 한줄 단축형");
func4(3, 5);

// 5. 화살표 단축형
const func5 = a => "02. 한줄 단축형";
console.log(func5(3));