var $halfWidth;
var $headingWidth;
var $iframeWidth;
var mediaWidth;

function pageFadeIn(){
    $('.wrapper').css({'display':'block'});
    setTimeout(function(){
        $('.start-pic').hide();
        $('.wrapper').addClass('fade-in');
        $('body').css({'overflow':'auto'});
    },1000);
}

$(window).load(function(){
    //$('.created-by-text').fadeIn(1000);
    //slider();
     //$('.slide-wrap > ul').scrollLeft(190);
     pageFadeIn();
     setTimeout(function(){listSetup();},1000);
});


$(document).on('click','.title', function(){
        alert($('.media-wrap').width());
    });


$(document).ready(function(){

    $('.menu .courses').on('click',function(){listOut($('.menu li'), 0, 50);listIn($('.app-menu li'), 0, 50);});
    $('.app-menu').on('click mouseleave', function(){listIn($('.menu li'), 0, 50);listOut($('.app-menu li'), 0, 50);});
    $('.menu-button').on('click', function(){
        if($('.menu, .app-menu').is(":visible")){
            listOut($('.menu li'), 0, 50);
            listOut($('.app-menu li'), 0, 50);
        }else{
            listIn($('.menu li'), 0, 50);
        }
    });

    $('.car-app').on('click', function(){
        $.ajax('car_maintenance_app.html', {
          success: function(data) {
             $('.media-wrap').html(data);
          }
       });
    });
    $('.recipe-app').on('click', function(){
        $.ajax('recipe_app.html', {
          success: function(data) {
             $('.media-wrap').html(data);
          }
       });
    });
      //slideshow
	  var _SlideshowTransitions = [
            //Custom slide show transitions. You can add as many as you like. Will start from top first.
	  		//{$Duration:1200,$Opacity:2},
            //{$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$JssorEasing$.$EaseOutQuad},
            {$Duration:1000,$Opacity:2,x:1,$Easing:$JssorEasing$.$EaseInQuad}

	  ];
      //slideshow object
        var options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: _SlideshowTransitions,
                $TransitionsOrder: 1,
                $ShowLink: true
            },
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $ChanceToShow: 2
            }
        };
        //start slideshow
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
        //Scales the slideshow container and adjusts picture size relative to screen size.
        function ScaleSlider() {
            var parentWidth = $('#slider1_container').width();
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);
            }
            else
                window.setTimeout(ScaleSlider, 30);
        }
    //ScaleSlider();
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
    mediaWidth = $('.media-wrap').width();
    $iframeWidth = $('iframe').width();
    //$('iframe').css('height', $iframeWidth);
    if($iframeWidth <= 300){
        //$('#slider1_container').css({'width': $iframeWidth});
    }
    if(mediaWidth > 650){
        //$('.slide-wrap').width($(window).width()-350);
    }
}

function slider() {
    var mediaWidth = $('.media-wrap').width();
    var slideWrapWidth = $('.slide-wrap').width();
    var slideWidth = $('.slide-wrap > ul').width();
    var oListItem = $('.slide-wrap li').width();
    var ListLength = $('.slide-wrap li').length;
    var $ListItem = oListItem;
    if(mediaWidth > 650){
        //$('.slide-wrap').width(mediaWidth-350);
    }



    setInterval(function(){
        //$('.slide-wrap').scrollLeft(ListItem);

        $('.slide-wrap').animate({scrollLeft: $ListItem}, 1000);
        if($ListItem >= slideWidth-slideWrapWidth){
            $ListItem = 0;
        }else{
            $ListItem = $ListItem+oListItem;
        }
    },4000);

}

//listOut will remove list from view by moving item down one at a time
function listOut (list, index, interval) {
    if(index < list.length) {
    $(list[index++]).removeClass('list-in-anima').addClass('list-out-anima').parent().hide();
    setTimeout(function () {
        listOut(list, index, interval); 
    }, interval);
  }
}
//listIn will show each list item one at a time by moving to original position
function listIn (list, index, interval) {
    if(index < list.length) {
    $(list[index++]).removeClass('list-out-anima').addClass('list-in-anima').parent().show();
    setTimeout(function () {
        listIn(list, index, interval);
    }, interval);
  }
}
//Menu list setup and animate in
function listSetup () {
    listOut($('.app-menu li'), 0, 0);
    if($(window).width()>800){
        listIn($('.menu li'), 0, 200);
    }else{
        listOut($('.menu li'), 0, 0);
    }
    setTimeout(function () {$('.app-menu, .menu').css({"opacity":"1"});}, 500);
}
