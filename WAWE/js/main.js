$(function () {




    
    
    
    var mixer = mixitup('.gallery__content');
    
    
	$(".menu, .go-top").on("click","a", function (event) {
        event.preventDefault();
        
		var id  = $(this).attr('href'),
        
        top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    
    $('.slider-blog__inner').slick({
        dots: true,
        arrows: false,

    })

    $('.menu__btn, .menu a').on('click', function () {
        $('.header-top__inner').toggleClass('header-top__inner--active');
        
    });


});