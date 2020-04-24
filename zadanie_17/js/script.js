'use strict';

$(document).ready(function() {

    $('.main_btna, .main_btn, li:contains("расписания туров")').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideToggle('slow');
    });  

    $('.close').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideToggle('slow');
    });  

});

