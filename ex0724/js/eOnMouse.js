var mOverOut = document.getElementById("mOverOut");
var mDownUp = document.getElementById("mDownUp");


function funMouseOver() {

    mOverOut.innerHTML = "마우스를 오버했습니다.";
    mOverOut.style.fontWeight = "bold";

    this.style.backgroundColor = "yellow";
    this.style.width = "160px";
    this.style.height = "30px";
    this.style.border = "1px solid red";
    this.style.boxShadow = "20px -6px lightgray";
}

function funMouseOut() {

    mOverOut.innerHTML = " 마우스를 아웃했습니다."
    mOverOut.style.fontWeight = "100";

    this.style.backgroundColor = "lightgreen";
    this.style.width = "120px";
    this.style.height = "20px";
    this.style.border = "none";
    this.style.boxShadow = "none";
}

mOverOut.onmouseover = funMouseOver;
mOverOut.onmouseout = funMouseOut;
// mOverOut.style.width = "160px";
mOverOut.style.fontWeight 
// ---------------------------
function funMouseDown(){
    this.innerHTML = "마우스를 눌렀습니다.";
    this.style.backgroundColor = "darkorange";
    this.style.color = "white";
    this.style.fontWeight = "bold";
    this.style.fontSize = "1.3em";
}

function funMouseup(){
    this.innerHTML = "마우스를 올렸습니다.";
    this.style.backgroundColor = "rgb(180, 239, 201)";
    this.style.color = "white";
    this.style.fontWeight = "100";
    this.style.fontSize = "1em";
}

mDownUp.onmousedown = funMouseDown;
mDownUp.onmouseup = funMouseup;
