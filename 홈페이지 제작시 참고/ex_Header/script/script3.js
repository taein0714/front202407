// 원래 스크립트 설정값임 테스트를 위해 주석처리 해놓음

// $(function () {

//     $('.menu').hover(function () {
//         $(this).find('.submenu').stop().slideDown(1000)
//     },
//         function () {
//             $('.submenu').stop().slideUp(500)
//         })
// })

$(function () {

    $('.menu').hover(function () {
        $(this).find('.submenu').stop().fadeIn()
    },
        function () {
            $('.submenu').stop().fadeOut()
    })
});