/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



function fadeOut(el, duration) {
    /*
             * @param el - The element to be faded out.
             * @param duration - Animation duration in milliseconds.
             */
    var step = 1 / duration * 10, opacity = 1;
    //el.style.opacity = 1;
    (function(){
        if (opacity <= 0) {
            return;
        }
        el.style.opacity = ( opacity -= step );
        setTimeout(arguments.callee, 10);
    })();

}
function fadeIn(el, duration) {
    /*
             * @param el - The element to be faded out.
             * @param duration - Animation duration in milliseconds.
             */
    var step = 1 / duration * 10, opacity = 0;
	    
    (function(){
        if (opacity >= 1) {
            return;
        }
        el.style.opacity = ( opacity += step );
        setTimeout(arguments.callee, 10);
    })();
}


function preLoadImages() {
    MM_preloadImages(   imagePath + 'button-home-down.png', 
        imagePath + 'button-topic-down.png', 
        imagePath + 'button-recommendation-down.png',
        imagePath + 'button-magazine-down.png');
}
