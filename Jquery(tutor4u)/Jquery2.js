/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 7/19/13
 * Time: 7:14 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
   /*
   $('.testbutton').click(function(){
        $("div >p ,strong ,.testbutton").css("background-color","lawngreen");
    }); //End click function

    $('.testbutton').click(function(){
        $("div >p:first-child").css("background-color","lawngreen");
    }); //End click function
    $('.testbutton').click(function(){
        $("div >p:last-child").css("background-color","lawngreen");
    }); //End click function
    $('.testbutton').click(function(){
        $("div strong").css("background-color","lawngreen"); //Select all strong element that are desendent to p element
    }); //End click function
    $('.testbutton').click(function(){
        $(" p:even").css("background-color","lawngreen");
    }); //End click function
    $('.testbutton').click(function(){
        $("p:odd").css("background-color","lawngreen");
    }); //End click function
    $('.testbutton').click(function(){
        $("#third").css("background-color","lawngreen");
    }); //End click function
    $('.testbutton').click(function(){
        $('.multiple').css("boarder","solid");
        $('.multiple').css("background-color","orange");
        $('.multiple').css("font-style","italic");
    }); //End Click function
    $('.testbutton').click(function(){
        $('strong.multiple').css("boarder","solid");
        $('strong.multiple').css("background-color","orange");
        $('strong.multiple').css("font-style","italic");
    }); //End Click function
    $('strong').click(function(){
        $('.multiple').css("boarder","solid");
        $('.multiple').css("background-color","orange");
        $('.multiple').css("font-style","italic");
    }); //End Click function */
    $('strong ,.testbutton , a').click(function(){
        $(this).css("boarder","solid");
        $(this).css("background-color","orange");
        $(this).css("font-style","italic");
    }); //End Click function





}); //End ready function