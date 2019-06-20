/* function to attach and remove overlay from a particular element
   ===============================================================
    * adds an '#overlay' element as the parent of the element passed as parameter
    * duration is the transition time of the overlay
    * background is the background color of the overlay with default value passed
    * passed element must have z-index specified to fully prevent any abnormal behaviours
    * but works fine without specifing z-index till now... 
*/
function attach_overlay_to(element, duration=400, background = 'rgba(0, 0, 0, 0.600)') {
    element_z_index = $(element).css("z-index");
    $(element).wrap("<div id='overlay'></div>");

    $('#overlay').css({
        'z-index': element_z_index - 1,
        'display': 'none',
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background': background
    })
    $('#overlay').fadeIn(duration);
}
/* removes the overlay
   ===================
    * with animation duration and element input
*/
function remove_overlay_from(element, duration=400) {
    $('#overlay').fadeOut(duration);
    setTimeout(function () {
        $(element).unwrap('#overlay')
    }, duration);
}
