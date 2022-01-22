$(function(){
    $('#photu').hover(function(){
        $('#photu-bg').css('transform', 'rotate(6deg)');
    })
    $('#photu').mouseleave(function(){
        $('#photu-bg').css('transform', 'rotate(0deg)');
    })
})
$(document).ready(function(){
    $(this).scrollTop(0);
});

$('#cool').mousemove(function(event) {
    windowWidth = $('body').width();
    windowHeight = $('body').height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #333333, #1a1a1a)');
});
/*
$(document).ready(function(){
    $('body').load('dbcreation.php');
})*/