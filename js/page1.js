$(document).ready(function(){

    $('ul.tabs__list li').click(function(){
        var tabs = $(this).attr('data-tabs');
        $('ul.tabs__list li').removeClass('current');
        $('.card-content.current').removeClass('current');
        $(this).addClass('current');
        $("#"+tabs).addClass('current');
    })

})


