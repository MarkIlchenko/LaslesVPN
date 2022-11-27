$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        lazyLoad: true,
        navText: [ '', ' ' ],
        autoplay: true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },

            768:{
                items:2
            },

            1000:{
                items:5
            }
        }
    });
    $('.owl-two').owlCarousel({
        loop:false,
        margin:10,
        lazyLoad: true,
        nav:true,
        navText: [ '', ' ' ],
        autoplay: false,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },

            768:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});








