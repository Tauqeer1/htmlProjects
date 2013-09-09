/**
 * Created with JetBrains WebStorm.
 * User: Tauqeer ahmed
 * Date: 8/19/13
 * Time: 11:21 AM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://student:student@ds041168.mongolab.com:41168/studentdatabase");
var studentSchema = {
    name: String,
    age: Number
};
var Student = mongoose.model("studentdatabase",studentSchema);

exports.save= function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    var stu1 = new Student({
        name:req.body.name,
        age:req.body.age
    });
    stu1.save(function(err,data){
        if(err){
            res.send("Error in saving data");
        }
        else{
            res.send("Saved");
        }
    });
}