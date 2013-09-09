/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 7/19/13
 * Time: 5:51 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $('p').hide();  //Initially Hide all the paragraph tags

    $('h1 , h1 , h1').click(function(){
        $(this).next().slideToggle(300);
    }); //End Click function

}); //End ready function