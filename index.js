// estblishment of connection betwen ejs module.
const { Console } = require('console');
const express=require('express');
//const { request } = require('http');
const path=require('path');
const  port=10000;
// to get all functionality of server we need to name it as app//
// connecting to the database.
const db =require('./config/mongoose');

 const Contact =require('./models/contact');
const app =express();
// to setup ejs//
app.set('view engine','ejs');
// to set a directory
app.set('assets',path.join(__dirname,'assets'));
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
	// console.log(__dirname ); //to display dirname in console
        // console.log(req.myname)
	// //to fetch the data and to display
	Contact.find({},function(err,contact_list){
		if(err){
			console.log("error in db");
		        return;
		}
		return res.render('home',{title:"My Contacts List",
	Contact_list:contact_list});//here we are endering a view,declaring locals 
});
	});
	// res.send('<h1>its is running</h1>');
	

app.get('/practice',function(req,res){
	console.log(__dirname);

	return res.render('practice',{title:"LET so go!"});
});
//for deleting a contact//
app.get('/delete-contact/', function(req, res){

	console.log(req.query);
	//get the id from query in the ul
	let id = req.query.id;
	Contact.findByIdAndDelete(id,function(err){
		if(err){
			console.log('error in deleteing obj');
			return;
		}
		return res.redirect('back');
	});
	// let contactIndex=Contactlist.findIndex(contact=>contact.phone==phone);
	// if(contactIndex != -1){
	// 	Contactlist.splice(contactIndex,1);
	// }
	
   });
//get requesting for home page where we written the form//
app.post('/create-contact', function(req, res){
	// Contactlist.push({
	// 	name:req.body.name,
	// 	phone:req.body.phone
	// });
	// Contactlist.push(req.body);
        Contact.create({
		name:req.body.name,
		phone:req.body.phone
	
	},function(err,newcontact){
		if (err){console.log('error in creating alog');
	      return;}

	console.log('*****',newcontact)
	
	return res.redirect('back');
});

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
