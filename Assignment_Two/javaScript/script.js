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

/* Shows the page content when the homeSplash screen is clicked. 
 * Using opacity instead of display allows transitions.
*/
function showContent() {
	document.getElementById("postSplash").style.opacity = "1";
}