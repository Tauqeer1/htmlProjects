
/**
 * Module dependencies.
 */

var express = require('express');

var http = require('http');
var path = require('path');

var app = express();

app.configure(function(){
    app.set('port',process.env.PORT || 3000);
});
//app.set('port',process.env.port || 3000);
/*
app.get('/',function(req,res){
    res.send('Hello Tauqeer');
});
app.get("/hi",function(req,res){
    var message = [
        "<h1>Hello express</h1>",
        "<p>Welcome to building web app in node js with Express</p>",
        "<p>You will love express because it's</p>",
        "<ul><li>Fast</li>",
        "<li>fun</li>",
        "<li>Flexible</li><ul>"].join("\n");

    res.send(message);

});

app.get("/users/:userId",function(req,res){
    res.send("<h1>Hello User # "+req.params.userId +"|");
});
app.post("/users",function(req,res){
   res.send("Creating a new user with a name"+req.body.username+".");
});
app.get(/\/users\/(\d*)\/?(edit)?/,function(req,res){
    //users/10
    // /users/10/
    // /users/10/edit
    var message = " user#" + req.params[0] + " 's profile";

    if(req.params[1]== 'edit'){
        message = 'Editing' +message;
    }
    else{
        message = 'Viewing' +message;
    }
    res.send(message);
});
*/
app.get('/',function(re1,res){
     res.render("index.ejs",{title: 'Express Node'});
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
