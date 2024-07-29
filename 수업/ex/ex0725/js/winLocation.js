// 변수 선언
var demo = document.getElementById("demo");
var demo2 = document.getElementById("demo2");
var demo3 = document.getElementById("demo3");
var demo4 = document.getElementById("demo4");
var demo5 = document.getElementById("demo5");
var demo6 = document.getElementById("demo6");
var locAssign = document.getElementById("locAssign")

// 속성 함수 정의

function funstyle(obj, c, f){
    obj.style.backgroundColor = c;
    obj.style.fontSize = f;
}

// 속성 설정
funstyle(demo, "yellow", "1.5em");
funstyle(demo2, "lightgreen", "1.8em");
funstyle(demo3, "lightpink", "1.3em");
funstyle(demo4, "yellow", "1.8em");
funstyle(demo5, "lightgreen", "1.5em");

// 값 정의
var locHref = window.location.href;
var locHostName = window.location.hostname;
var locPathName = window.location.pathname;
var locProtocol = window.location.protocol;
var locPort = window.location.port;


// 속성 함수 정의 2

function funInnerHtml(obj, loc){
    obj.innerHTML = `${loc}`;
}
// 속성 설정 2
funInnerHtml(demo, locHref);
funInnerHtml(demo2, locHostName);
funInnerHtml(demo3, locPathName);
funInnerHtml(demo4, locProtocol);
funInnerHtml(demo5, locPort);








// 표현
// demo.innerHTML = `${locHref}`;
// demo2.innerHTML = `${locHostName}`;
// demo3.innerHTML = `${locPathName}`;
// demo4.innerHTML = `${locProtocol}`;
// demo5.innerHTML = `${locPort}`;


// 버튼 이벤트 구현
function newDoc(){
    const aUrl = "https://www.w3schools.com";
    window.location.assign(aUrl);
}

locAssign.onclick = newDoc;





      
