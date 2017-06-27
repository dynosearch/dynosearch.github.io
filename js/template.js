//[Master Javascript]

//Project:	Shoppping - Onepage Html Responsive Template
//Version:	1.1
//Last change:	02/05/2017
//Primary use:	Shoppping - Onepage Html Responsive Template


//Template script here

$(document).ready(function(){
    "use strict"; // Start of use strict
	
// Master slider Home page
	var slider = new MasterSlider();
	 
		// adds Arrows navigation control to the slider.
		slider.control('arrows');
		slider.control('timebar' , {insertTo:'#masterslider'});
		slider.control('bullets');
	 
		 slider.setup('masterslider' , {
			 width:1400,    // slider standard width
			 height:580,   // slider standard height
			 space:1,
			 layout:'fullwidth',
			 loop:true,
			 preload:0,
			 view:'fade',
			 autoplay:true,
			 overPause:false
		});
	
// Master slider Shop Single Product Details
	
	var slider = new MasterSlider();
         
        slider.control('arrows');  
        slider.control('thumblist' , {autohide:false ,dir:'h',arrows:false, align:'bottom', width:127, height:137, margin:5, space:5});
     
        slider.setup('masterslider-product' , {
            width:540,
            height:586,
            space:5,
            view:'scale'
        });

}); // End of use strict