$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });
    $(".product-item").hover(
    	function() {
    		$(this).find("#card").addClass("flipped");
    		$(this).find(".btn").removeClass("btn-grey");
    		switch ($(this).attr('id')) {
    			case "pianoic": $(this).addClass("product-red"); break;
    			case "slaprat": $(this).addClass("product-green"); break;
    			case "whitedrop": $(this).addClass("product-blue"); break;
    			case "othergame": $(this).addClass("product-yellow"); break;
    			default: $(this).addClass("product-red");
    		}
    	},
    	function() {
    		$(this).find("#card").removeClass("flipped");
    		$(this).find(".btn").addClass("btn-grey");
    		switch ($(this).attr('id')) {
    			case "pianoic": $(this).removeClass("product-red"); break;
    			case "slaprat": $(this).removeClass("product-green"); break;
    			case "whitedrop": $(this).removeClass("product-blue"); break;
    			case "othergame": $(this).removeClass("product-yellow"); break;
    			default: $(this).removeClass("product-red");
    		}
    	}
    );

    $.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
    $("#section-link a").click( function(e) {
    	e.preventDefault();
    	$.scrollTo( this.hash, 600 );
	});
	$(".navbar-brand").click( function(e) {
    	e.preventDefault();
    	$.scrollTo( this.hash, 800, { easing:'elasout' } );
	});
});