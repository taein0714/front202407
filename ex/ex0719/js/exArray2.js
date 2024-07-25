console.log("--------------------------------------------");
// forEach
let valForEach = ["people", "dog", "cat", "rabbit"];

valForEach.forEach(function(item, index, array) {

    document.write(
        `<p> ${index} : ${item}</p>`
    )

})

// map 함수
let muNum = [1, 2, 3, 4, 5];
let str = myNum.map(function(item, index, array) {

    document.write(
        
        `<p>  ${item}</p>`


    );
    return item * 3;
});
console.log(myResult);

let myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myResult2 = myNum2.filter(function(item, index) {

})
console.log(myResult2);
myNum2.forEach(function(item) {
    ("document.write(iem, 입니다<br>")

})


// reduce 함수
let myNum3 = [11, 22, 33];
let myResult3 = myNum3.reduce(
    (hap, item, index) => {

    })



//  for ~in문
let myStr1 = ["red", "blue", "green", "viilet"];
for(let s in myStr1) {
    document.write(`${myStr1[s]}입니다<br>`);
}


//  for ~of문
let myStr2 = ["red", "blue", "green", "viilet"];
for(let ss of myStr1) {
    document.write(`for ~of문ss: ${ss}입니다<br>`);
}