/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 8/20/13
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://student:student@ds041167.mongolab.com:41167/registraton");

var schema ={
    name:String,
    age:Number
};
var student = mongoose.model("student",schema);
exports.save= function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    var stu1= new student({
        name:req.body.name,
        age:req.body.age
    });
    stu1.save(function(err,data){
        if(err){
            res.send("Error in saving the data");
        }
        else{
            res.send("Saved");
        }
    });
}