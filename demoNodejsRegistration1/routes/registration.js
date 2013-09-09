

var mongoose = require('mongoose');
mongoose.connect("mongodb://student:student@ds041168.mongolab.com:41168/studentdatabase");


var StudentSchema = {
    name: String,
    age : Number
};

var Student = mongoose.model("Student",StudentSchema);

exports.save = function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    var stu1 = new Student({
        name:req.body.name ,
        age:req.body.age
    });
    stu1.save(function(req,res){
        if(err){
            res.send("Error in saving data");
        }
        else{
            res.send("Saved");
        }
    });
}
