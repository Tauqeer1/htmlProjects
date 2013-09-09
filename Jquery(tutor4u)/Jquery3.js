/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 7/20/13
 * Time: 6:49 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
   /*
    $('h1').click(function(){
        $(this).css("background-color","orange");
    }); //End click function

    $('h1').mousedown(function(){
       $(this).css("background-color","orange");
    }); //End mousedown event

    $('h1').mouseup(function(){
        $(this).css("background-color","yellow");
    }); //End mousedown event

    $('h1').mouseenter(function(){
        $(this).css("background-color","orange");
        $(this).css("font-style","italic");
    }); //End mouseenter event

    $('h1').mouseleave(function(){
        $(this).css("background-color","yellow");
        $(this).css("font-style","normal");

    }); //End mouseout event     */

    $('h1').mouseenter(function(){
        $(this).css("background-color","orange");
        $(this).css("font-style","italic");

    }); //End mouseenter event

    $('h1').mouseleave(function(){
        $(this).css("background-color","yellow");
        $(this).css("font-style","normal");
        $("*").unbind("mouseleave");

    }); //End mouseout event


}); //End ready function