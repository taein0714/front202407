// if (matchMedia("not all and (orientation: landscape)").matches) {
//     //세로 모드일때
//     $(".wrap").css({
//         "background-color": "yellow",
//         "color": "orange"
//     });
// } else {
//     $(".wrap").css({
//         "background-color": "yellow",
//         "color": "orange"
//     });
// }

// ----------------------------


// 메뉴바 페이드 인 페이드 아웃

$(function () {

    $('.menu').hover(function () {
        $(this).find('.submenu').stop().fadeIn()
    },
        function () {
            $('.submenu').stop().fadeOut()
    })
});