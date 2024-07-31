$("button").click(function (e) {
    let w = $("#div1").width();
    let h = $("#div1").height();
    let iW = $("#div1").innerWidth();
    let iH = $("#div1").innerHeight();
    let oW = $("#div1").outerWidth();
    let oH = $("#div1").outerHeight();
    let print1 = "넓이: " + w + "<br>" + "높이: " + h + "<hr>";
    let print2 = "border안쪽넓이: " + iW + "<br>" + "border안쪽높이: " + iH + "<hr>";
    let print3 = "border포함넓이: " + oW + "<br>" + "border포함높이: " + oH + "<hr>";
    $("#div1").html(print1 + print2 + print3);

    // $("#div1").html("넓이: " + w +"<br>"+ "높이: " + h + "<hr>");
    // $("#div1").html("border안쪽넓이: " + iW
    //     + "<br>" + "border안쪽넓이: " + iH + "<hr>");
    // $("#div1").html("border포함넓이: " + oW
    //     + "<br>" + "border포함넓이: " + oH + "<hr>");
});