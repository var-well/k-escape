window.addEventListener("load", function(){
    (function(window, document){
        'use strict';
    
        const toggles = document.querySelectorAll('.toggle');
        const toggleBtn = document.getElementById('toggle-btn');
    
        toggleBtn.addEventListener('click', function(){
            toggleElements();
        });
    
        function toggleElements(){
            [].forEach.call(toggles, function(toggle){
                toggle.classList.toggle('on');
            });
        };
    
    })(window, document)
    
});


$(document).ready(function(){

    $('ul.tabs__list li').click(function(){
        var tabs = $(this).attr('data-tabs');
        $('ul.tabs__list li').removeClass('current');
        $('.card-content.current').removeClass('current');
        $(this).addClass('current');
        $("#"+tabs).addClass('current');
    })

})
