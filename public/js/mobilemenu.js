$(document).ready(function() {

    var toggleMenu = $('.js-open-menu');
    var toggleMenuBtn = $('.js-open-menu-btn');
    var mobileMenu = $('.js-mobile-menu');

    // toggleMenu.click(function() {

    toggleMenu.click(function() {
        toggleMobileMenu();
    });
    var openMenuMobile = false;

    function toggleMobileMenu() {
        if (openMenuMobile) {
            toggleMenuBtn.removeClass('active');
            mobileMenu.removeClass('active');
            $('.js-navigation').removeClass('open-mobile');
        } else {
            toggleMenuBtn.addClass('active');
            mobileMenu.addClass('active');
            $('.js-navigation').addClass('open-mobile');
        }
        openMenuMobile = !openMenuMobile;
    }

});    