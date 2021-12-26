$(function(){
    //--------------------------------------- scroll to up button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop1').fadeIn();
            } else {
                $('.scrollToTop1').fadeOut();
            }
                });
    
                $('.scrollToTop1').click(function(){
                    $('html, body').animate({scrollTop : 0},400);
                    return false;
                });
        
        
        });