// 날짜
var todaty = new Date();
console.log(today);
console.log(today.getFullYear());
today.setFullYear(2022)
console.log(today.getFullYear());

// 오늘 날짜를 찍어보자~
var str = today.getFullYear + "년" + (today.getMonth().toString+1) + "월" + today.getDay();
console.log(str);
