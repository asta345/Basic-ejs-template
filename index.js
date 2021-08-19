// const express=require('express');
// //const { request } = require('http');
// const path=require('path');
// const  port=10000;
// // to get all functionality of server we need to name it as app//
// const app =express();
// // to setup ejs//
// app.set('view engine','ejs');
// // to set a directory
// app.set('views',path.join(__dirname,'views'));
// var Contactlist=[
// 	{
// 		name:"asta",
// 		phone:"9999955555"
// 	},
// 	{
// 		name:"yami",
// 		phone:"999999999"
// 	},
// 	{
// 		name:"veldora",
// 		phone:"99999999991"
// 	},
// 	{
// 		name:"teach",
// 		phone:"4445556667"
// 	},
// 	{      
// 		name:"issei",
// 		phone:"1234567891"

// 	},
// 	{
//                name:"aokiji",
// 	       phone:"345678912" 
// 	},

// ]
// // we have given get request to fetch data//   
// app.get('/',function(req, res){
// 	console.log(__dirname ); //to display dirname in console

// 	// res.send('<h1>its is running</h1>');
// 	return res.render('home',{title:"My Contacts List",
// 	Contact_list:Contactlist});//here we are endering a view,declaring locals 
// })

// app.get('/practice',function(req,res){
// 	console.log(__dirname);

// 	return res.render('practice',{title:"LET so go!"});
// });
// //get requesting for home page where we written the form//
// app.post('/create-contact', function(req, res){
// 	return res.redirect('/home');
//     });
    



// app.listen(port,function(err){
// 	if(err){
// 		console.log('error in running server',err);
// 	}else
// 	 console.log('yup! my server is running');
// });
const express = require('express');
const path = require('path');
const port = 10000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs",
	
    });
});


app.get('/', function(req, res){
    return res.render('home',{
        title: "Contact List",
	Contact_list: contactList
    });
})
app.post('/create-contact', function(req, res){
	return res.redirect('/practice');
    });

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})