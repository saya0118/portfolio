$(function(){
    var item_num = $('div.menu-content').length;
    var circle = document.getElementsByClassName('menu-item');
    var deg = 360/item_num;
    var red = (deg*Math.PI/180.0);
    var circle_r = $('.promise-menu').width() * 2;
    $('div.menu-content').each(function(i, elem) {
        var x = Math.cos(red * i) * circle_r + circle_r;
        var y = Math.sin(red * i) * circle_r + circle_r;
        $(elem).css('left', x);
        $(elem).css('top', y);
    });
});