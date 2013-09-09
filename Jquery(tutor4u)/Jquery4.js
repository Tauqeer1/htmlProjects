/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 7/20/13
 * Time: 11:39 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    /*
    $("h1").click(function(){
         $("h2").hide(1000);                            //Hide function
    }); //End Click function
    $("h2").hide();                                     //Hide function
    $("h1").click(function(){
        $("h2").show(1000);                             //Show function
    }); //End Click function
    $("h1").click(function(){
        $("h2").toggle(1000);                           //Toggle function
    }); //End Click function
    $("h1").click(function(){
        $("h2").slideUp(1000);                          //SlideUp function
    }); //End Click function
    $('h2').hide();                                     //Hide function
    $("h1").click(function(){
        $("h2").slideDown(1000);                        //SlideDown function
    }); //End Click function
    $("h1").click(function(){
        $("h2").slideToggle(1000);                      //SlideToggle function
    }); //End Click function
    $("h1").click(function(){
        $("h2").fadeOut(1000);                          //FadeOut function
    }); //End Click function
    $('h2').hide() ;                                    //Hide function
    $("h1").click(function(){
        $("h2").fadeIn(1000);                           //FadeIn function
    }); //End Click function
    $("h1").click(function(){
        $("h2").fadeToggle(1000);                       //fadeToggle function
    }); //End Click function
    $("h1").click(function(){
        $("h2").fadeTo(1000,0.2);                       //fadeTo function
    }); //End Click function    */
    $("h1").click(function(){
        $("h2").delay(2000).fadeToggle(1000);
    }); //End Click function
}); //End ready function