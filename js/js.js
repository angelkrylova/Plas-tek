/*Скрипт для слайдов*/
$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    cssEase: 'ease-in',
    responsive: [
        {
            breakpoint: 700,
            settings: {
                arrows: false,
            }
        }
    ]
});
/*Скрипт для слайдов (логотипы клиентов)*/
$('.slide').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow:4,
    responsive: [
        {
            breakpoint:600,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});

/*Модельное окно*/

$(document).ready(function () {
    $('a.order').click(function (event) {
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function () {
                $('.modal_form')
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '15%' }, 100);
            });
    });
    $('.modal_close, .overlay').click(function () {
        $('.modal_form')
            .animate({ opacity: 0, top: '45%' }, 100,
            function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(100);
            }
            );
    });

});

/* проверка валидации заполнения полей*/
$("[name='phone']").inputmask("+7 (999) 999-99-99");
