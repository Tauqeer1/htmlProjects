/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 7/15/13
 * Time: 8:40 AM
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var  a=6;
    a="hello world";
    alert(window.a);
    var  b = 5;
    var c =sum(a,b);
    var obj1 = {
        name: "Tauqeer ahmed shakir",
        age : 15,
        eating:function(foodItem){
            alert(this.name+" eating " +foodItem);
        }
    };
    var obj2=obj1;
    alert(obj1.name);
    obj1.eating("badam");

    var arr = [3,4,5];

    var multiply = function (x,y){
        return x*y;
    }
    function sum(x,y){
        return x+y;
    }
})();