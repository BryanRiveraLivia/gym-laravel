$( document ).ready(function() {
    var contador = 1;
 
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