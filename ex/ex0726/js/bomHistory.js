var btn = document.querySelectorAll("input")
// i = 0~3
for(let i=0; i<btn.clientHeight; i++){
    btn[i].style.backgroundColor = "lightblue";
    btn[i].style.fontSize = "1.6em"
}


// var output = document.getElementById("output");


function goHistory2(){
    location.assign("./bomHistory2.html")
}

function goBack(){
    window.history.back();
}


function goForward(){
    window.history.forward();
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