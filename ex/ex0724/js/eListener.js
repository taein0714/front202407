var d = document;
var btn = d.getElementById("btn");
var date = d.getElementById("date");
btn.addEventListener("click", displayDate);
function displayDate(){
    // this.innerHTML = Date();
    this.innerHTML = Date();


}
btn.addEventListener("click", displayDate);

// ------------------------------------
var btnOverOut = d.getElementById("btnOverOut");
var viewOverOut = d.getElementById("viewOverOut");

function mytext(e){
    let myEvent = e.type;
    // console.log(e.type);

    viewOverOut.innerHTML = `마우스 ${myEvent}이벤트가 발생하였습니다.`;
}


btnOverOut.addEventListener("click", mytext);
btnOverOut.addEventListener("dblclick", mytext);
btnOverOut.addEventListener("mouseup", mytext);
btnOverOut.addEventListener("mousedown", mytext);
btnOverOut.addEventListener("mousemove", mytext);
btnOverOut.addEventListener("mouseenter", mytext);
btnOverOut.addEventListener("mouseleave", mytext);
btnOverOut.addEventListener("mouseout", mytext);



