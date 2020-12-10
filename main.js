/* ===================================================================
 * Transcend - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    /* slick slider
     * ------------------------------------------------------ */
    var clSlickSlider = function() {
        
        $('.testimonials__slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

   /* Initialize
    * ------------------------------------------------------ */
    (function clInit() {
        
        clSlickSlider();

    })();
        
})(jQuery);