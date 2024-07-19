// 객체 생성방식으로 배열 정의하기
var pen = new Array();
console.log(pen);
// var pen = [];
pen[0] = "red";
console.log(pen);

pen[1] = "green";
console.log(pen);

pen[2] = "blue";
console.log(pen);

pen[3] = "orange";
console.log(pen);

console.log(pen[2]);

// reverse
pen.reverse();
console.log("reverse: ", pen);

// unshift
pen.unshift("pink", "brown");
console.log("unshift: ", pen);

// pop
pen.pop();
console.log("pop: ", pen);

// push
pen.push("pink", "sky");
console.log("push: ", pen);

// splice
pen.splice(3);
console.log("splice(3): ", pen);

// 테스트를 위해서 요소 추가
pen.push("yellow", "purple");

pen.splice(1, 2);
console.log("splice(1, 2): ", pen);

// 테스트를 위해서 요소추가
pen.push("black", "white");
console.log("push: ", pen);

pen.splice(1,  2, "apple", "grape");
console.log('splice(1, 2, "apple", "grape"): ', pen);

// 값으로 인덱스 찾기
var myVal = pen.indexOf("apple");
console.log(myVal);

// join
console.log("pen.join: " + pen.join());
console.log("pen.join('/'): " + pen.join("/"));

// sort
let pens = ["red", "green", "biue", "orange"];
console.log(pens.sort());

// 내림차순은 응용합니다.
pen2.sort();
pen2.reverse();
console.log("내름차순: " + pen2);





