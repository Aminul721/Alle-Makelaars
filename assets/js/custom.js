jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		allowParentLinks: false,
		prependTo:'#menu_holder'
	});
});

jQuery(function () {

	jQuery('.three_step_carousel').owlCarousel({
		loop:false,
		margin: 42,
		items:3,
		nav:true,
		dots:false,
		mouseDrag: false,
		touchDrag: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				mouseDrag: true,
				touchDrag: true,
				margin: 0,
			},
			992:{
				items:3,
				dots:false,
				mouseDrag: false,
			},
		},
	});

	jQuery('.testimonial_item_area').owlCarousel({
		loop:false,
		nav:true,
		margin: 0,
		items:4,
		dots:false,
		mouseDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				mouseDrag: true,
				touchDrag: true,
				margin: 0,
			},
			992:{
				items:3,
				dots:false,
				mouseDrag: true,
			},
			1281:{
				items:4,
				dots:false,
				mouseDrag: true,
			}
		}
	});


	jQuery('.detail_item_area').owlCarousel({
		loop:false,
		nav:true,
		margin: 0,
		items:3,
		dots:false,
		mouseDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				mouseDrag: true,
				touchDrag: true,
				margin: 0,
				dotsEach: 3,
			},
			992:{
				items:3,
				dots:false,
				mouseDrag: true,
			},
			1281:{
				items:3,
				dots:false,
				mouseDrag: true,
			}
		}
	});

	jQuery('.collaborations_item_area').owlCarousel({
		loop:false,
		nav:true,
		margin: 0,
		items:7,
		dots:false,
		mouseDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				dots:true,
				nav:true,
				mouseDrag: true,
				touchDrag: true,
				margin: 0,
				stagePadding: 30,
			},
			992:{
				items:7,
				dots:false,
				mouseDrag: true,
			},
		}
	});

	jQuery('.blogs_home_item_area').owlCarousel({
		loop:false,
		nav:true,
		margin: 0,
		items:4,
		dots:false,
		mouseDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				mouseDrag: true,
				touchDrag: true,
				margin: 0,
			},
			992:{
				items:4,
				dots:false,
				mouseDrag: true,
			},
		}
	});


	jQuery('.north_palce_carousel').owlCarousel({
		loop:false,
		nav:true,
		margin: 0,
		items:3,
		dots:false,
		mouseDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				mouseDrag: true,
				touchDrag: true,
				margin: 0,
				dotsEach: 3,
			},
			992:{
				items:3,
				dots:false,
				mouseDrag: true,
			},
			1281:{
				items:3,
				dots:false,
				mouseDrag: true,
			}
		}
	});

	jQuery('.customers_3d_testimonials').owlCarousel({
		loop:true,
		nav:true,
		margin: 0,
		items:1,
		dots:true,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		stagePadding: 140,
		responsive: {
			0: {
				items: 1,
				stagePadding: 20,
				center: true,
				touchDrag: true,
				mouseDrag: true,
			},



			375:{
				items:1,
				stagePadding: 20,
			},
			992:{
				items:1,
				stagePadding: 60,
			},
			
			
			1081:{
				items:1,
				stagePadding: 80,
			},
			1281:{
				items:1,
				stagePadding: 100,
			},
			1367:{
				items:1,
				stagePadding: 120,
			},
			1441:{
				items:1,
				stagePadding: 140,
			},
		}
	});


	function counter(event) {
     var element = event.target;
     var items = event.item.count;
     var item = event.item.index + 1;
     var sldtxt = $(".active .ivySlideTxt").html();
     var sldWidth = 100;
     var sldPercent = (sldWidth * item) / items;
     $("#counter").html("0" + item + " / 0" + items);
     $(".slTxt").html(sldtxt);
     $(".slideState span").css("width", sldPercent + "%");
     $(".slideState span").html(sldPercent + "%");
   };



//    map view carousle

jQuery('.blog_map_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin: 18,
	stagePadding: 46,
	items:1,
	dots:true,
	mouseDrag: true,
	touchDrag: true,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			dots:true,
			stagePadding: 46,
		},
		// 992:{
		// 	items:1,
		// 	stagePadding: 20,
		// },
		// 1281:{
		// 	items:1,
		// 	stagePadding: 20,
		// }
	}
});


});


jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});

//ranger mouse hover


   jQuery(document).ready(function(){
		jQuery.noConflict() 
		(function($){ 
			var removeClass = true;
			  $(".banner_form").click(function() {
				 $("body").addClass("form-active");
				 $(".banner_form").addClass("focus-active");
				 $(".focus-active-none").addClass("focus-active-1");
				removeClass = false;
			  });
			  $("html").click(function() {
				if (removeClass) {
				   $("body").removeClass("form-active");
				   $(".banner_form").removeClass("focus-active");
				   $(".focus-active-none").removeClass("focus-active-1");
				}
				removeClass = true; 
			  });
	
		});
	});



jQuery(document).ready(function(){
	jQuery('.filter_btn').on("click", function(){
		jQuery('.sp-viewport, .sp-container').toggleClass('filterActive');
	});

	// slider range 1
	jQuery('#slider-range .ui-slider-handle').each(function(){
		jQuery(this).addClass('sliderNumber_'+jQuery(this).index());     
	 });
	jQuery('#slider-range .sliderNumber_1.ui-slider-handle').on("mouseover", function(){
		jQuery('#slider-range').siblings('.min-range').css('color', '#3e3eff');
	});
	jQuery('#slider-range .sliderNumber_1.ui-slider-handle').on("mouseout", function(){
		jQuery('#slider-range').siblings('.min-range').css('color', '#222e3a');
	});

	jQuery('#slider-range .sliderNumber_2.ui-slider-handle').on("mouseover", function(){
		jQuery('#slider-range').siblings('.max-range').css('color', '#3e3eff');
	});
	jQuery('#slider-range .sliderNumber_2.ui-slider-handle').on("mouseout", function(){
		jQuery('#slider-range').siblings('.max-range').css('color', '#222e3a');
	});

	// slider range 2
	jQuery('#slider-range1 .ui-slider-handle').each(function(){
		jQuery(this).addClass('sliderNumber_'+jQuery(this).index());     
	 });
	jQuery('#slider-range1 .sliderNumber_1.ui-slider-handle').on("mouseover", function(){
		jQuery('#slider-range1').siblings('.min-range').css('color', '#3e3eff');
	});
	jQuery('#slider-range1 .sliderNumber_1.ui-slider-handle').on("mouseout", function(){
		jQuery('#slider-range1').siblings('.min-range').css('color', '#222e3a');
	});
	jQuery('#slider-range1 .sliderNumber_2.ui-slider-handle').on("mouseover", function(){
		jQuery('#slider-range1').siblings('.max-range').css('color', '#3e3eff');
	});
	jQuery('#slider-range1 .sliderNumber_2.ui-slider-handle').on("mouseout", function(){
		jQuery('#slider-range1').siblings('.max-range').css('color', '#222e3a');
	});

});