$( document ).ready(function() {
    var dimension_pantalla = $(window).width();
    var contador = 1;
    var contador2 = 1;
 
    if(dimension_pantalla > 980)
    {
        $('main header img.nav-icon').click(function(){
            // $('nav').toggle();
     
            if(contador == 1){
                $('aside').css("display","none");
                $('main').addClass('main-full');
                contador = 0;
            } else {
                contador = 1;
                $('aside').css("display","initial");
                $('main').removeClass('main-full');
            }
     
        });
    }
    else
    {
        $('main header img.nav-icon').click(function(){
            // $('nav').toggle();
     
            if (contador2 == 1) {
                $('aside').animate({
                    left: '0'
                });
                $('main').animate({
                    left: '30%'
                });
                contador2 = 0;
            } else {
                contador2 = 1;
                $('aside').animate({
                    left: '-100'
                });
                $('main').animate({
                    left: '0%'
                });
            }
     
        });
    }

    /* full screen */

    $('main header .activar-fullscreen').click(function() {
        $('main header .activar-fullscreen').css("display","none");
        $('main header .desactivar-fullscreen').css("display","inline");
        $('body').fullscreen();
        return false;
    });
    $('main header .desactivar-fullscreen').click(function() {
        $('main header .desactivar-fullscreen').css("display","none");
        $('main header .activar-fullscreen').css("display","inline");
        $.fullscreen.exit();
        return false;
    });


});