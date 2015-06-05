var $halfWidth;
var $headingWidth;
var $iframeWidth;


$(window).ready(function(){
    $('.created-by-text').fadeIn(1000);
});


$(document).ready(function(){
    $('body').click(function(){
        alert($(window).width());
    });


	
      //slideshow
	  var _SlideshowTransitions = [
            //Custom slide show transitions. You can add as many as you like. Will start from top first.
	  		{$Duration:1200,$Opacity:2}
	  ];
      //slideshow object
        var options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                }
        };
        //start slideshow
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);

        function ScaleSlider() {
            var parentWidth = $('#slider1_container').width();
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);
            }
            else
                window.setTimeout(ScaleSlider, 30);
        }

        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);

    resizeWindow();
});


//on window resize center and optimize
$(window).resize(function(){
    resizeWindow();
});

function resizeWindow(){
    $iframeWidth = $('iframe').width();
    $('iframe').css('height', $iframeWidth);
    if($iframeWidth <= 300){
        $('#slider1_container').css({'width': $iframeWidth});
    }
}