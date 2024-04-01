$(function () {
    'use strict';

    $('.navbar li a').click(function () {

        window.console.log($(this).data('scroll'));
    });

});