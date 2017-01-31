$(function() {

    // JCarousel

    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

    // Select box

    $(".my_select_box").chosen({
        disable_search_threshold: 10,
        no_results_text: "Oops, nothing found!",
        width: "50%",
    });

    // Nav menu

    $('.main-menu').hover(function() {
            $(this).children('.sub-menu').stop(true, true);
            $(this).children('.sub-menu').slideDown(600).animate({
                backgroundColor: '#045F94'
            });
        },

        function() {
            $(this).children('.sub-menu').delay(200).slideUp(300).animate({
                backgroundColor: '#258dc8'
            });
        }
    );


});
