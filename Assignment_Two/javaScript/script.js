/* Fades out the Splashscreen when first opening the website */
$(document).ready(function(){ 
	$('.enter').click(function () {
   	$(this).parent('#homeSplash').fadeOut(1000);
	});			
});


/* Opens mainMenu */
function openMenu() {
    document.getElementById("mainMenu").style.width = "100%";
}

/* Closes mainMenu */
function closeMenu() {
    document.getElementById("mainMenu").style.width = "0";
}


var clicked = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageY;
    },
    'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'row-resize');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}