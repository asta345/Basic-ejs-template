const express=require('express');
//const { request } = require('http');
const path=require('path');
const  port=10000;
// to get all functionality of server we need to name it as app//
const app =express();
// to setup ejs//
app.set('view engine','ejs');
// to set a directory
app.set('views',path.join(__dirname,'views'));
 app.use(express.urlencoded()); //middleware function
app.use(express.static('assets'));//to accesing static files
//middleware 1
// app.use(function(req,res,next){
// 	req.myname="avi";
// 	//console.log('middleware one 1 bro');
// 	next();
// });

//middleware 2
// app.use(function(req,res,next){
// 	console.log('middleware 2');
// 	console.log('my name from mw2 is',req.myname )
// 	next();
// })
var Contactlist=[
	{
		name:"asta",
		phone:"9999955555"
	},
	

]
// we have given get request to fetch data//   
app.get('/',function(req, res){ 
	console.log(__dirname ); //to display dirname in console
        console.log(req.myname)
	// res.send('<h1>its is running</h1>');
	return res.render('home',{title:"My Contacts List",
	Contact_list:Contactlist});//here we are endering a view,declaring locals 
})

app.get('/practice',function(req,res){
	console.log(__dirname);

	return res.render('practice',{title:"LET so go!"});
});
app.get('/delete-contact:phone:name', function(req, res){
	console.log(req.params);
	let phone = req.params.phone
    });
//get requesting for home page where we written the form//
app.post('/create-contact', function(req, res){
	// Contactlist.push({
	// 	name:req.body.name,
	// 	phone:req.body.phone
	// });
	Contactlist.push(req.body);
	  return res.redirect('back');


	// for checking in the terminal we have returned console.log
	// console.log(req.body); 
	// console.log(req.body.name);
	// console.log(req.body.phone);
	//return res.redirect('/home');
    });
    



app.listen(port,function(err){
	if(err){
		console.log('error in running server',err);
	}else
	 console.log('yup! my server is running');
});
