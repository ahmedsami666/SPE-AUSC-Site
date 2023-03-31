const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.redirect("/Home")
});

app.get("/Home", function(req, res){
    res.render("Index")
})

app.get("/Activities", function(req, res){
    res.render("Activities")
});

app.get("/Programs", function(req, res){
    res.render("Programs")
}); 

app.get("/Website-Team", function(req, res){
    res.render("Website-Team")
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000")
});