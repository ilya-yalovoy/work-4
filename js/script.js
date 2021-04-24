$(document).ready(function() {
	$('.exit-in').click(function(event) {
		$('.sign-in').addClass("no-active");
		$('.sign-in').removeClass('active');
		$('.wrapper').removeClass('body');
		$("html,body").css("overflow","auto");
		$('.sign-up').addClass("no-active");
		$('.sign-up').removeClass('active');
	});
	$('.exit-up').click(function(event) {
		$('.sign-in').addClass("no-active");
		$('.sign-in').removeClass('active');
		$('.sign-up').addClass("no-active");
		$('.sign-up').removeClass('active');
		$('.wrapper').removeClass('body');
		$("html,body").css("overflow","auto");
	});
	$('.sign-in-button').click(function(event) {
		$('.sign-in').removeClass("no-active");
		$('.sign-in').addClass('active');
		$('.wrapper').addClass('body');
		$("html,body").css("overflow","hidden");
	});
	$('.sign-up-button').click(function(event) {
		$('.sign-up').removeClass("no-active");
		$('.sign-up').addClass('active');
		$('.wrapper').addClass('body');
		$("html,body").css("overflow","hidden");
	});
	$('.menu-burger').click(function(event) {
		$('.menu-burger').toggleClass('active-burger');
		$('.menu').toggleClass('active-menu');
		$("html,body").css("overflow","hidden");
	});
	$('.active-burger').click(function(event) {
		$("html,body").css("overflow","auto");
	});
});


!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
jQuery(document).ready(function() {
	jQuery('.elementanm').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated slideRight',
		offset: 0
	});
});
