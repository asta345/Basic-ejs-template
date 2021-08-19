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
app.use(express.urlencoded()); 
var Contactlist=[
	{
		name:"asta",
		phone:"9999955555"
	},
	{
		name:"yami",
		phone:"999999999"
	},
	{
		name:"veldora",
		phone:"99999999991"
	},
	{
		name:"teach",
		phone:"4445556667"
	},
	{      
		name:"issei",
		phone:"1234567891"

	},
	{
               name:"aokiji",
	       phone:"345678912" 
	},

]
// we have given get request to fetch data//   
app.get('/',function(req, res){
	console.log(__dirname ); //to display dirname in console

	// res.send('<h1>its is running</h1>');
	return res.render('home',{title:"My Contacts List",
	Contact_list:Contactlist});//here we are endering a view,declaring locals 
})

app.get('/practice',function(req,res){
	console.log(__dirname);

	return res.render('practice',{title:"LET so go!"});
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
