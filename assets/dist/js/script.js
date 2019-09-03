$(document).ready(function(){
    //mobile menu
    $(document).mouseup(function(e){
        $('.toggle-menu').on('click', function () {
            $('.mainMenu').toggleClass('show');
            $(this).toggleClass('active');
        });
        $('#mainMenu a').on('click', function () {
            $('#mainMenu').removeClass('show');
            $('.toggle-menu').removeClass('active');
        });
        var menu = $('.mainMenu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
            $('.toggle-menu').removeClass('active');
        }
    });
    //end mobile menu

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $("#fullPage").fullpage({
        responsiveWidth: 320,
        navigationPosition: "right",
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
        navigation: false,
        scrollingSpeed: 1500,
        scrollOverflow: true,
        afterResize: null,
        afterResponsive: null,

        //animation section ONLEAVE
        'onLeave': function(index, nextIndex, direction){
            var $AnimPage1 = $('#section1');
            var $AnimPage2 = $('#section2');
            var $AnimPage3 = $('#section3');
            var $AnimPage4 = $('#section4');
            var $AnimPage5 = $('#section5');
            var $AnimPage6 = $('#section6');
            var $AnimPage7 = $('#section7');
            var $AnimPage8 = $('#section8');
            var $AnimPage9 = $('#section9');

            if (index == 1 && direction == 'down'){
                $AnimPage2.animateCss('zoomIn');
                $AnimPage1.animateCss('zoomOut');
            }
            if (index == 2 && direction == 'up'){
                $AnimPage2.animateCss('zoomOut');
                $AnimPage1.animateCss('zoomIn');
            }
            if (index == 2 && direction == 'down'){
                $AnimPage2.animateCss('zoomOut');
                $AnimPage3.animateCss('zoomIn');
            }
            if (index == 3 && direction == 'up'){
                $AnimPage3.animateCss('zoomOut');
                $AnimPage2.animateCss('zoomIn');
            }
            if (index == 3 && direction == 'down'){
                $AnimPage3.animateCss('zoomOut');
                $AnimPage4.animateCss('zoomIn');
            }
            if (index == 4 && direction == 'up'){
                $AnimPage4.animateCss('zoomOut');
                $AnimPage3.animateCss('zoomIn');
            }
            if (index == 4 && direction == 'down'){
                $AnimPage4.animateCss('zoomOut');
                $AnimPage5.animateCss('zoomIn');
            }
            if (index == 5 && direction == 'up'){
                $AnimPage5.animateCss('zoomOut');
                $AnimPage4.animateCss('zoomIn');
            }
            if (index == 5 && direction == 'down'){
                $AnimPage5.animateCss('zoomOut');
                $AnimPage6.animateCss('zoomIn');
            }
            if (index == 6 && direction == 'up'){
                $AnimPage6.animateCss('zoomOut');
                $AnimPage5.animateCss('zoomIn');
            }
            if (index == 6 && direction == 'down'){
                $AnimPage6.animateCss('zoomOut');
                $AnimPage7.animateCss('zoomIn');
            }
            if (index == 7 && direction == 'up'){
                $AnimPage7.animateCss('zoomOut');
                $AnimPage6.animateCss('zoomIn');
            }
            if (index == 7 && direction == 'down'){
                $AnimPage7.animateCss('zoomOut');
                $AnimPage8.animateCss('zoomIn');
            }
            if (index == 8 && direction == 'up'){
                $AnimPage8.animateCss('zoomOut');
                $AnimPage7.animateCss('zoomIn');
            }
            if (index == 8 && direction == 'down'){
                $AnimPage8.animateCss('zoomOut');
                $AnimPage9.animateCss('zoomIn');
            }
            if (index == 9 && direction == 'up'){
                $AnimPage9.animateCss('zoomOut');
                $AnimPage8.animateCss('zoomIn');
            }

        }
    });

    //popups
    $('.open-requestCall').on("click",function(){
        $('.overlay-requestCall').addClass('active');
    });
    $('.overlay-requestCall .closeBtn, .overlay-requestCall .close').on("click",function(){
        $('.overlay-requestCall').removeClass('active');
    });

    $('.open-thanksMsg').on("click",function(){
        $('.overlay-thanksMsg').addClass('active');
    });
    $('.overlay-thanksMsg .closeBtn, .overlay-thanksMsg .close').on("click",function(){
        $('.overlay-thanksMsg').removeClass('active');
    });

    $('.open-thanksMsg2').on("click",function(){
        $('.overlay-thanksMsg2').addClass('active');
    });
    $('.overlay-thanksMsg2 .closeBtn, .overlay-thanksMsg2 .close').on("click",function(){
        $('.overlay-thanksMsg2').removeClass('active');
    });

    $('.open-feedback').on("click",function(){
        $('.overlay-feedback').addClass('active');
    });
    $('.overlay-feedback .closeBtn, .overlay-feedback .close').on("click",function(){
        $('.overlay-feedback').removeClass('active');
    });

    $('.open-photos').on("click",function(){
        $('.overlay-photos').addClass('active');
        var datavalue = $(this).data('value');
        //popup tabs
        $('.top_filter-items').removeClass('active');
        $('.tab-content').removeClass('active');
        $('.' + datavalue).addClass('active');
        $('.top_filter-items[data-tab="' + datavalue + '"]').addClass('active');
        addGrid();
        $('.top_filter-items').on('click', function(){
            var dataTab = $(this).data('tab');
            $('.top_filter-items').removeClass('active');
            $('.tab-content').removeClass('active');
            
            $(this).addClass('active');
            $('.' + dataTab).addClass('active');
            addGrid();
        });
        //stop body scrolling
        $.fn.fullpage.setAllowScrolling(false);
    });
    $('.overlay-photos .closeBtn, .overlay-photos .close').on("click",function(){
        $('.overlay-photos').removeClass('active');
        //adding body scrolling
        $.fn.fullpage.setAllowScrolling(true);
    });

    function addGrid(){
        if($(window).width() < 1023){
            $('.grid').masonry({
                itemSelector: '.grid-item',
                gutter: 0
            });
        } else {
            $('.grid').masonry({
                itemSelector: '.grid-item',
                gutter: 30
            });
        }
    };

    function checkHeight(){
        if ($(window).width() < 768) {
            $( window ).on( "orientationchange", function( event ) {
                if($(window).innerHeight() > $(window).innerWidth()){
                    $('.alert').addClass('show');
                } else{
                    $('.alert').removeClass('show');
                }
            });
        }
    }
    checkHeight();

    $(window).on('resize', function(){
        checkHeight();
    });
    
});

