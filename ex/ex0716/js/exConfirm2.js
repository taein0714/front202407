
// 이 창을 떠닐자 묻고, true이면 새 창을 띄워서 굿바이 인사한다.

// Boolean(true,false)
 
if(window.confirm("이 창을 닫으시겠습니까?")){

// 수행할 로직을 작성하는 부분
window.open("exit.html", "mozilawindow", "popup");

}

// 참고할 부분
// window.open("https://www.mozilla.org/", "mozillaTab");
// window.open("https://www.mozilla.org/", "mozilawindow", "popup");
