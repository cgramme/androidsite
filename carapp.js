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
	  		{$Duration:1500,x:0.2,y:-0.1,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$JssorEasing$.$EaseInWave,$Top:$JssorEasing$.$EaseInWave,$Clip:$JssorEasing$.$EaseLinear},$Round:{$Left:0.8,$Top:2.5}},
	  		{$Duration:1500,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInWave,$Top:$JssorEasing$.$EaseInWave,$Clip:$JssorEasing$.$EaseOutQuad},$Round:{$Left:0.8,$Top:2.5}},
	  		{$Duration:1200,x:0.2,y:-0.1,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$JssorEasing$.$EaseInWave,$Top:$JssorEasing$.$EaseInWave,$Clip:$JssorEasing$.$EaseOutQuad},$Round:{$Left:1.3,$Top:2.5}}
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

    resizeWindow();
});


//on window resize center and optimize
$(window).resize(function(){
    resizeWindow();
});

function resizeWindow(){
    $iframeWidth = $('iframe').width();
    $('iframe').css('height', $iframeWidth);
    if($iframeWidth < 355){
        $('#slider1_container, .slider2').css({'width': $iframeWidth, 'height': $iframeWidth*1.6666});
    }
}