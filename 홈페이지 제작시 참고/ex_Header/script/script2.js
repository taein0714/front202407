$(function () {
    $('header nav > ul').hover(function () {
        $('.submenu, .headerBg').stop().slideDown()
    },
        function () {
            $('.submenu, .headerBg').stop().slideUp()
        })
});