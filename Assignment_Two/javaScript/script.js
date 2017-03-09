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