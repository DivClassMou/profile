$(document).ready(function() {

    var width = $(window).width();

    if (width >= 1200) {
        initSlide(3, 4);
    }
    else if (width >= 992) {
        initSlide(2, 3);
    }
    else if (width >= 768) {
        initSlide(2, 3);
    }
    else if (width >= 572) {
        initSlide(2, 2);
    }
    else {
        initSlide(1, 1);
    }

    windowResize();

});


function initSlide(popular_discussions_slidesToShow, topicality_slidesToShow)
{
    $('#popular_discussions').slick({
        slidesToShow: popular_discussions_slidesToShow,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });

    $('#topicality').slick({
        slidesToShow: topicality_slidesToShow,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });
}

function windowResize()
{
    $(window).resize(function() {
        $('#popular_discussions').slick('unslick');
        $('#topicality').slick('unslick');
        var width = $(window).width();
        console.log(width);

        if (width >= 1200) {
            initSlide(3, 4);
        }
        else if (width >= 992) {
            initSlide(2, 3);
        }
        else if (width >= 768) {
            initSlide(2, 3);
        }
        else if (width >= 572) {
            initSlide(2, 2);
        }
        else {
            initSlide(1, 1);
        }
    });
}
