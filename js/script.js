

$(function(){

    $('#owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        nav:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true,


        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $(".icon").click(function(){
        $(".menu").slideToggle();
        $(".cross").show();  
    }
    )

    $(".cross").click(function(){
        $(".menu").slideToggle();
        $(".cross").hide();
    })


// cleints

    $('#owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        smartSpeed:1500,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })  
    
    



    // just a for testing purpose.

    
    
}
)


  






















