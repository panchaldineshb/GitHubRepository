/*
 * 
 * Part of article How to detect screen size and apply a CSS style
 * http://www.ilovecolors.com.ar/detect-screen-size-css-style/
 *
 */

$(document).ready(function() {

	if ((screen.width>=1024) && (screen.height>=768))
	{
		alert('Screen size: 1024x768 or larger');
		$("link[rel=stylesheet]:not(:first)").attr({href : "css/detect1024.css"});
	}
	if ((screen.width<=320) && (screen.height<=480))
	{
		alert('Screen size: 320 or larger');
		$("link[rel=stylesheet]:not(:first)").attr({href : "css/detect320.css"});
	}
	
	
});

