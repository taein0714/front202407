var btn = document.getElementById("btn");
btn.style.fontSize = "1.6em"

var btn2 = document.getElementById("btn2");
btn2.style.fontSize = "1.6em"

// var output = document.getElementById("output");

function goBack(){
    window.history.back();
}


function goForward(){
    window.history.forward();
}

function goHistory2(){
    window.history.gohistory2();
}
function enCookie(){
    let output = document.getElementById("output");
    output.style.fontSize = "30px";
    let naviA = navigator.cookieEnabled;
    let naviB = navigator.appCodeName;
    let naviC = navigator.platform;
    let naviD = navigator.appVersion;
    let naviE = navigator.userAgent;
  
   output.innerHTML = `A:${naviA}<br>B: ${naviB}<br> C:${naviC}<br> D:${naviD}<br> E:${naviE}<br>`;
}