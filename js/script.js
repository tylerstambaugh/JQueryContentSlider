$(function () {
    //set options
    var speed = 500; //fade speed
    var autoswitch = true; //auto slider option
    var autoswitch_speed = 4000; //delay for autoswitching active slide
    var isLast = false;

    //add initial active class to first slide
    $('.slide').first().addClass('active');

    //hide all slides
    $('.slide').hide();

    //show active slide
    $('.active').show();

    //next handler
    $('#next').on('click', nextSlide);

    //previous slide handler
    $('#prev').on('click', prevSlide);

    //auto slider handler
    if (autoswitch) {
        setInterval(nextSlide, autoswitch_speed);
    }

    //swtich to next slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    //switch to previous slide
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});

