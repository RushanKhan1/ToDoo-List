//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let todo = [];
let workItems = [];

app.get("/", function(req, res){
    d = date();
    res.render('list', {listTitle: d,
			listItems: todo}); //rendering list.ejs in the views folder
})


app.post("/", function(req, res){
    let text = req.body.text;
    if(req.body.button == "Work"){
	
	workItems.push(text);
	res.redirect("/work");
    }
    else{
	
	todo.push(text);
	res.redirect("/");
    }    
    
})

app.get("/work", function(req, res){

    
    res.render('list', {
	listTitle: "Work",
	listItems: workItems

    });
})

app.get("/switch", function(req, res){

    res.render('list', {
	listTitle: date(),
	listItems: todo
    })
})

app.post("/switch", function(req, res){
    if(req.body.button == "work"){
	res.redirect("/work")
    }
    else res.redirect("/");
})

app.post("/work", function(req, res){
    let witem = req.body.name;
    workItems.push(witem);
    res.redirect("/work");    

})

app.listen(port, function(){
    console.log("The server is running on port: " + port);
})
