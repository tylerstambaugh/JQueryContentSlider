$(function() {
    //set options
    var speed = 500; //fade speed
    var autoswitch = true; //auto slider option
    var autoswitch_speed = 4000; //delay for autoswitching active slide

    //add initial active class to first slide
    $('.slide').first().addClass('active');

    //hide all slides
    $('.slide').hide();

    //show active slide
    $('.active').show();

    $('#next').on('click', function(){
       $('.active').removeClass('active').addClass('oldActive');
       
       if($('oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
       } else {
        $('.oldActive').next().addClass('active');
       }

       $('.oldActive').removeClass('oldActive');
       $('.slide').fadeOut(speed);
       $('.active').fadeIn(speed);
    });

    $('#prev').on('click', function(){

    });
});

