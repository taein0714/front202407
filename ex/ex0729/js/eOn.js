
// $("p").on(

//     "click", function () {
//         $(this).hide();
//     }

// );

$("#muti_on").on(
 {
    mouseenter: function (){
        $(this).css("background-color", "lightgray");
     },
    mouseleave: function () {
        $(this).css("background-color", "lightblue");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    },
    dblclick: function(){
        $(this).css("background-color", "orange");
    }

 }

);