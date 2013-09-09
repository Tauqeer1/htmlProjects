/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 8/20/13
 * Time: 11:15 AM
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    $('#btn').on("click",function(){
        var name = $('#name').val();
        var age = $('#age').val();
        alert(name);
        $.ajax({
            url:"regSubmit",
            type:"post",
            data:{name:name,age:age}
        }).done(function(response){
                alert("Done="+response);
            });
    });
});