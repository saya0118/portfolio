$('.value-bar').each(function(){
    $(this).animate({
        width:$(this).attr('data-percent')},"fast");
})