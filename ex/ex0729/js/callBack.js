$("button").click(function (e) {
    // $("p").hide();
    // $("p").hide("slow");
    // $("p").hide(3000);
    $("p").hide("slow",

        function () {
            // hide 후에 alert를 띄우기 위해서
            alert("P태그가 사라졌습니다.");
        }
    );





});

// $("button").click(function (e) {
//     $("p").hide("slow");
//     alert("이제 P태그가 사라지려고 합니다");
// });