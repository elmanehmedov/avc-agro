import $ from 'jquery';

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".scrolling").css("background" , "white");
        }
  
        else{
            $(".scrolling").css("background" , "transparent");  	
        }
    })
  })


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".scrolling ul li a").css("color" , "black");
        }
  
        else{
            $(".scrolling ul li a").css("color" , "white");  	
        }
    })
  })

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".scrolling .call-box-text h5, p").css("color" , "black");
        }
  
        else{
            $(".scrolling .call-box-text h5, p").css("color" , "white");  	
        }
    })
  })


  $(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            // $(".navbar-content .logo img").attr("src","../../assets/svg/logo.svg");
        }

        else{
            // $(".navbar-content .logo img").attr("src","../../assets/svg/logo-white.svg");
        }
    })
})


$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".navbar-content .call-box-icon img").attr("src","../../assets/svg/call2.svg");
        }

        else{
            $(".navbar-content .call-box-icon img").attr("src","../../assets/svg/call.svg");
        }
    })
})



