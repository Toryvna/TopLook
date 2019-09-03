$(document).ready(function(){
    
    //Tabs
    $('.filter-items').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //reviews slider
    $('.reviews-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.reviews-nav',
    });
    $('.reviews-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.reviews-for',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon6"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon6"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.reviews-for',
                dots: false,
                centerMode: true,
                centerPadding: '0px',
                focusOnSelect: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon6"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon6"></i></button>',
              }
            },
        ],
    });

    $('.instaSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon6"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon6"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon6"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon6"></i></button>',
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  nextArrow: '<button class="slick-arrow next"><i class="icon-icon6"></i></button>',
                  prevArrow: '<button class="slick-arrow prev"><i class="icon-icon6"></i></button>',
                }
              },
        ],
    });

    //квиз 
    $('.next-question').on('click', function(){
        var currentItem = $(this).parent().find('.active');
        if(currentItem.hasClass('question-5')){
            $(this).hide();
            $('.sendBtn').css('display', 'block');
        }
        currentItem.removeClass('active').next().addClass('active');
    });
    // $('.sendBtn').on('click', function(){
    //     $('.question').removeClass('active');
    //     $('.question-1').addClass('active');
    //     $(this).hide();
    //     $('.next-question').css('display', 'block');
    // });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('.imgSize').css('background-image', 'url(' + e.target.result + ')');
                $('#preview').hide();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#file").change(function(){
        readURL(this);
    });

    $('.phoneInput').mask('+7(999)999-99-99');

    $('#section2 .btn').on('click', function(){
        $('#question-value1').prop("checked", true);
    });
    $('#section3 .btn').on('click', function(){
        $('#question-value3').prop("checked", true);
    });
    $('#section4 .btn').on('click', function(){
        $('#question-value2').prop("checked", true);
    });

          

});