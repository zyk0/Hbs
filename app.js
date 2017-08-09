var express = require("express");
 
var app = express();
 
app.set("view engine", "hbs");
 
app.get("/", function(request, response){
	response.send("кликай <a href='http://127.0.0.1:3000/contact'>сюда</a>");
});
app.get("/contact", function(request, response){
     
    response.render("contact.hbs", {
        title: "песик Рэкс",
		address: "Садовая 14/2",
        email: "gav-gav@dog.com",
		breed: ["Collie", "yorkshire", "dachshund", "setter", "greyhound"],
        phone: "+1(234)56-78-90"
    });
});
app.listen(3000, function(error, req, res){
	if (error){console.log (error + 'err');};
	console.log('127.0.0.1:3000');
});