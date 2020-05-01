var express=require("express");
var app=express();

var LocalStrategy =require("passport-local");
var passport =require("passport");
var passportLocalMongoose =require("passport-local-mongoose");

var sortJsonArray = require('sort-json-array');



var mongoose=require("mongoose");//mongoose.connect("mongodb://pusmau2005:<pusmau2005>@docdb-2020-04-08-06-35-193.cykxhv66hwyd.us-east-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&retryWrites=false");


var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

var upload = multer({ storage: storage});

var cloudinary = require('cloudinary');
cloudinary.config({ 
	
  cloud_name: 'dqkwzygyv', 
  api_key: 742732537228864, 
  api_secret:'ac7USPQ7YjDWFUgZLAiLUcMqlsU'
});



var erl=0;


 var datetime = new Date();
    console.log(datetime.toISOString().slice(0,10));
/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pushkar:<root>@cluster0-xkgjn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*//*
*/


var favicon = require('serve-favicon')
var path = require('path')


app.get("/pop",function(req,res){
	
	res.render("pop.ejs");
})








app.use(favicon(path.join('outputDir',  'favicon.ico')))

const MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb+srv://pushkar:pushkar@hello-xkgjn.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('ERROR:', err.message);
});




var userdetails =new mongoose.Schema({
	uname:String,
	name:String,
	image:String,
	rollno:String,
	branch:String,
	email:String,
	add:String
	
	
	
	
});


var secretSchema = new mongoose.Schema({
	user:String,
	pass:String
	
	
	
});
var countSchema =new mongoose.Schema({
	ucount:String
});
var num;

var usercount =mongoose.model("usercount",countSchema);
usercount.find({},function(err,call){
	if(err){}
	else{
		call.forEach(function(caller){
			num=caller.ucount;
		})
	}
	
	
});
console.log("number");
console.log(num);
//usercount.create({ucount:1},function(err,call){});


 
var secretpass =new mongoose.Schema({
	apass:String
	});
var adminpass =mongoose.model("adminpass",secretpass);

var detail=mongoose.model("detail",userdetails)



secretSchema.plugin(passportLocalMongoose);
var User=mongoose.model("User",secretSchema);


var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");






app.use(require("express-session")({
	secret:"rust i tate",
	resave:false,
	saveUninitialized:false
}));




app.use(passport.initialize());
app.use(passport.session());
var erln=0;



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


passport.use(new LocalStrategy(User.authenticate()));


app.get("/", function(req, res){
	 var datetime = new Date();
    console.log(datetime.toISOString().slice(8,10));
  

    res.render("home");
});



var regn=0;

app.get("/newser",function(req,res){
	
 var request=require("request");
   
	
request("http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=7c5c37dd476b49de96c8df16d2ae49d8",function(error,response,body){
    
    if(!error &&response.statusCode==200){
      var parsedData= JSON.parse(body);
  
		
      res.render("news.ejs",{items:parsedData});
        
        
    }
})
   
    
})


detail.remove({});
//user.remove({});
//table.remove({},function(){});






/*
app.get("/secret",isLoggedIn, function(req, res){
   res.render("secret"); 
});
*/
var ex=0;
app.get("/extra",isLoggede,function(req,res){
	res.render("extra.ejs",{u:req.user.username});
});
app.post("/extra",upload.single('image'),function(req,res){
	 const file = req.file
  if (req.file) {
   
var ima;
		
	cloudinary.v2.uploader.upload(req.file.path,{resource_type:"raw"}, function(error,result) {
  // add cloudinary url for the image to the campground object under image property
		
  req.body.image = result.secure_url;
		
			ima=  req.body.image;
		
		
	console.log(result);
	
		
	
	
	
	detail.create({
		uname:req.user.username,
			name:req.body.name,
	image:ima,
	rollno:req.body.rollno,
	branch:req.body.branch,
	email:req.body.email,
	add:req.body.add
	
	},function(err,call){
		if(err){
			console.log("err");
			console.log(err);
		}
		else{
			console.log("acadas");
			console.log(call);
			
			res.redirect("/posts");
		}
	
	})
	})


  }
	
	
	else{
		
		var ima;
		var ini=Math.floor(Math.random()*6);
		switch(ini){
			case 0:
				ima="https://cdn.pixabay.com/photo/2013/07/13/01/24/bunny-155674_960_720.png";
				
				break;
				
				case 1:
				ima="https://cdn.pixabay.com/photo/2016/04/01/09/16/cartoon-1299245_960_720.png";
				
				break;
				
				case 2 :
				ima="https://cdn.pixabay.com/photo/2016/03/31/23/37/bird-1297727_1280.png";
				
				break;
				
				case 3:
				ima="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_960_720.png";
				
				break;
				
				
				case 4:
				ima="https://cdn.pixabay.com/photo/2014/04/03/00/39/bald-eagle-309003_960_720.png";
				
				break;
				
				case 5:
				ima="https://cdn.pixabay.com/photo/2016/03/31/18/19/animal-1294281_960_720.png";
				
				break;
				
				
			default:
				ima="https://cdn.pixabay.com/photo/2014/04/03/00/35/owl-308773_1280.png"
				
		}
	
	
	console.log(ima);
	
	
	detail.create({
		uname:req.user.username,
			name:req.body.name,
	image:ima,
	rollno:req.body.rollno,
	branch:req.body.branch,
	email:req.body.email,
	add:req.body.add
	
	},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			ex=1;
			res.redirect("/profile");
			
		}
	});
		
		
		
		
		
		
		
	}
});
	
app.get("/news",function(req, res) {
    res.render("search.ejs");
})



app.get("/results",function(req,res){
	console.log("sgsdrts");
    var query=req.query.search;

	 var request=require("request");
	var datetime = new Date();
    var dat=datetime.toISOString().substring(0,10);console.log(dat);
	console.log(typeof(dat));
request("http://newsapi.org/v2/everything?q="+query+"&sources=bbc-news,al-jazeera-english,australian-financial-review,ansa,axios,aftenposten,abc-news-au&from="+dat+"&sortBy=publishedAt&apiKey=7c5c37dd476b49de96c8df16d2ae49d8",function(error,response,body){
    
    if(!error &&response.statusCode==200){
      var parsedData= JSON.parse(body);
    
      res.render("news.ejs",{items:parsedData,s:query});
        
        
    }
})
   
    
})





app.get("/covid19",function(req,res){
	var requestl=require("request");

requestl("https://covid19-server.chrismichael.now.sh/api/v1/IndiaCasesByStates",function(err,response,body){
	
	if(err){
		console.log(err);
	}
	else{
		
		var parsedData= JSON.parse(body);
	
		console.log(body['data']);
		console.log(parsedData);
		parsedData['data'].forEach(function(fr){
		
			
			res.render("covid.ejs",{items:	sortJsonArray(fr['table'],'state')});
		});
		
	
	}
	
});
	
});

console.log()



function isLoggede(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


var nt=0;

app.get("/extran",isLoggede,function(req,res){
	var tnt=tn;
	tn=0;
	res.render("extran.ejs",{u:req.user.username,tnt:tnt});
});
app.post("/extran",function(req,res){
	var ima;
	

		
  if (req.file) {
   


	cloudinary.v2.uploader.upload(req.file.path,{resource_type:"raw"}, function(error,result) {
  // add cloudinary url for the image to the campground object under image property
		
  req.body.image = result.secure_url;
		console.log("dasfaaaas");
		;
			ima=  result.secure_url;
		
	
	
	
	
	detail.create({
		uname:req.user.username,
			name:req.body.name,
	image:ima,
	rollno:req.body.rollno,
	branch:req.body.branch,
	email:req.body.email,
	add:req.body.add
	
	},function(err,caller){
		if(err){
			console.log("erroe00");
			console.log(err);
		}
		else{
			console.log("done");
			console.log(caller);
		
			res.redirect("/new");
			
		}
	});
	
	
		
  // add author to campground
	});
	
		
	}
	
	
	else{
		
		
	var ini=Math.floor(Math.random()*6);
		switch(ini){
			case 0:
				ima="https://cdn.pixabay.com/photo/2013/07/13/01/24/bunny-155674_960_720.png";
				
				break;
				
				case 1:
				ima="https://cdn.pixabay.com/photo/2016/04/01/09/16/cartoon-1299245_960_720.png";
				
				break;
				
				case 2 :
				ima="https://cdn.pixabay.com/photo/2016/03/31/23/37/bird-1297727_1280.png";
				
				break;
				
				case 3:
				ima="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_960_720.png";
				
				break;
				
				
				case 4:
				ima="https://cdn.pixabay.com/photo/2014/04/03/00/39/bald-eagle-309003_960_720.png";
				
				break;
				
				case 5:
				ima="https://cdn.pixabay.com/photo/2016/03/31/18/19/animal-1294281_960_720.png";
				
				break;
				
				
			default:
				ima="https://cdn.pixabay.com/photo/2014/04/03/00/35/owl-308773_1280.png"
				
		}
	}
	
	console.log(ima);
	
	
	detail.create({
		uname:req.user.username,
			name:req.body.name,
	image:ima,
	rollno:req.body.rollno,
	branch:req.body.branch,
	email:req.body.email,
	add:req.body.add
	
	},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			ex=1;
			res.redirect("/new");
			
		}
	});
		
		
		
		
	
	
});

var regs=0;
var check=0;
var ckeckn=0;
app.get("/register", function(req, res){
		var rnn=regs;
		
	
	if(check==0 && regs==0){
		res.redirect("/pac");
	}
	else{
		check=0;
			regs=0;
   res.render("register.ejs",{r:rnn}); 
	
	}
	
	
	
});

var checkn=0;

var enn=0;
app.get("/pacn",function(req,res){
	var ei=enn;
	enn=0;
	res.render("passcheckn.ejs",{eni:ei});
	
});

app.post("/pacn",function(req,res){
	console.log("fs");
	
		console.log(req.body.apass);
	adminpass.find({apass:req.body.apass},function(err,call){
		
		if(err){
			console.log(err);
			
		}
		else{
			console.log(call);
			var test=0;
			
			call.forEach(function(callo){
				test=callo.apass;
			});
			console.log(test);
			if(!test){
				enn=1;
				res.redirect("/pacn");
			}
			else{
				console.log("fonud");
				adminpass.remove({apass:req.body.apass},function(err,call){
				if(err){
					console.log(err);
				}	
					else{
						      adminpass.create({
	                    apass:""+Math.floor((Math.random())*10000000)
	
                         },function(err,call){
	
	                    if(err){
	                      	console.log(err);
	                     }
	                       else{
	                   	console.log(call);
	                       }
	
	
                           });

                    checkn=1;
					res.redirect("/registern");	
					}
					
					
				});	
			
			}
		
		}
	});
	
	
});


adminpass.create({apass:12},function(err,call){console.log(call)})




var eni=0;
app.get("/pac",function(req,res){
	var ei=eni;
	eni=0;
	res.render("passcheck.ejs",{eni:ei});
	
});

app.post("/pac",function(req,res){
	console.log("fs");
	
		console.log(req.body.apass);
	adminpass.find({apass:req.body.apass},function(err,call){
		
		if(err){
			console.log(err);
			
		}
		else{
			console.log(call);
			var test=0;
			
			call.forEach(function(callo){
				test=callo.apass;
			});
			console.log(test);
			if(!test){
				eni=1;
				res.redirect("/pac");
			}
			else{
				console.log("fonud");
				adminpass.remove({apass:req.body.apass},function(err,call){
				if(err){
					console.log(err);
				}	
					else{
						      adminpass.create({
	                    apass:""+Math.floor((Math.random())*10000000)
	
                         },function(err,call){
	
	                    if(err){
	                      	console.log(err);
	                     }
	                       else{
	                   	console.log(call);
	                       }
	
	
                           });

                    check=1;
					res.redirect("/register");	
					}
					
					
				});	
			
			}
		
		}
	});
	
	
});


//handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
			regs=1;
            return res.redirect('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/extra");
        });
    });
});

var tn=0;
app.get("/registern", function(req, res){
		var rn=regn;
			 
	if(checkn==0 && regn==0){
		res.redirect("/pacn");
	}
	else{
		checkn=0;
		regn=0;
   res.render("register.ejs",{r:rn}); 
	
	}
	
 
});
//handling user sign up
app.post("/registern", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
			regn=1;
		
			
            return res.redirect('registern');
        }
        passport.authenticate("local")(req, res, function(){
			
			tn=1;
           res.redirect("/extran");
        });
    });
});






var log=0;
app.get("/logout", function(req, res){
    req.logout();
	log=1;
    res.redirect("/profile");
});

var ln=0;
app.get("/login", function(req, res){
	var e=erl;
	erl=0;
	var  ter=tempi;	
	
	if(tempi==1){
		e=0;
	}
	tempi=0;
   res.render("login",{e:e,ter:ter}); 
});

app.post("/login", function n(req,res,next){
	ln=1;
	console.log(ln);
	next();
	
},function(req,res,next){
	
	erl=1;
	next();
	
	
},passport.authenticate("local", {
    successRedirect: "/posts",
	
    failureRedirect: "/login"
}) ,function(req, res){
});



app.get("/loginn", function(req, res){
	console.log("value of t");
	console.log(temp);
	var tt=temp;
	temp=0;
	var en=erln;
	erln=0;
   res.render("loginn",{t:tt,en,en}); 
});
//login logic
//middleware

var lnt=0;

app.post("/loginn",function(req,res,next){
	
	erln=1;
	next();
	
},function f(req,res,next){
	lnt=1;
	next();
	
	
}, passport.authenticate("local", {
    successRedirect: "/new",
    failureRedirect: "/loginn"
}) ,function(req, res){
});



var tableSchema = new mongoose.Schema({
	name:String,
	ima:String,
	desc:String,
	iduser:String,
	date:String
	
	
});

var table = mongoose.model("table",tableSchema);





app.get("/",function(req,res){
	
	//console.log(user);
	res.render("home.ejs");
	
});




app.get("/comment",function(req,res){
	res.render("comment.ejs")
});





app.get("/new",isLoggedIn,function(req,res){
	     var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
	
	res.render("new.ejs",{u:t});
	
});


var temp=0;
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
	temp=1;
    res.redirect("/loginn");
}


app.post('/new', upload.array('myFiles'), function(req,res){

	var m=req.body.message;
	if(req.files.length>0){
	var count=1;
    const files = req.files;
			m+="<p style=\"color:brown;\">Files attached below ->></p>"
		console.log(files.length);
    for (const file of files) {
	
    		console.log(file.originalname);	
	cloudinary.v2.uploader.upload(file.path,{resource_type:"raw"}, function(error,result) {
  // add cloudinary url for the image to the campground object under image property
		
		m+="<li ><a href=\""+result.secure_url+"\" style=\"color:red;\">"+file.originalname+"</a></li>"
	
		if(count==files.length){
		var datetime = new Date();
    var dati=datetime.toISOString().substring(0,10);console.log(dati);
	console.log(typeof(dati));
	
	
	
	var n=req.body.name;
	var i;
	
	
	detail.find({uname:req.user.username},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			call.forEach(function(item){
				i=item.image;
			});
		}
		
		
		
	});
	console.log("asfsed");
	console.log(i);
	
	
	
	
	
	
	
	table.create({
		name:n,
		ima:i,
		desc:m,
		iduser:req.user.username,
		date:dati
		
		
		
	},function(err,call){
		
		if(err){
			console.log(err);
		}
		else{
			
			console.log(typeof(req.user.username));
			console.log(call);
			res.redirect("/posts");
		}
		
		
		
		
	});
	
		   }
		count++;
	});
		
	
     
  
    }

		
	}
	else{
		console.log("else");
		
		var datetime = new Date();
    var dati=datetime.toISOString().substring(0,10);console.log(dati);
	console.log(typeof(dati));
	
	
	
	var n=req.body.name;
	var i;
	
	
	detail.find({uname:req.user.username},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			call.forEach(function(item){
				i=item.image;
			});
		}
		
		
		
	});
	console.log("asfsed");
	console.log(i);
	
	
	
	
	
	
	
	table.create({
		name:n,
		ima:i,
		desc:req.body.message,
		iduser:req.user.username,
		date:dati
		
		
		
	},function(err,call){
		
		if(err){
			console.log(err);
		}
		else{
			
			console.log(typeof(req.user.username));
			console.log(call);
			res.redirect("/posts");
		}
		
		
		
		
	});
		
	}
	
	
	
  
})


app.get("/profile",function(req,res){
	
	
	if(req.query.search){
		
		 const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		
	console.log(req.user);
	detail.find({$or : [{uname:regex},{name:regex},{date:regex},{branch:regex},{rollno:regex}]},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
			
			var l=log;
			log=0;
			var exe=ex;
			ex=0;
			call=sortJsonArray(call,'name');
			res.render("profile.ejs",{items:call,u:t,l:l,nu:exe});
		}
		
		
	});
	
		
		
		
	}
	else{
	
	console.log(req.user);
	detail.find({},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
			
			var l=log;
			log=0;
			var exe=ex;
			ex=0;
			call=sortJsonArray(call,'name');
			res.render("profile.ejs",{items:call,u:t,l:l,nu:exe});
		}
		
		
	});
	
	}
	
});







	
			var i="";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
app.get("/posts",function(req,res){
	if(req.query.search){
		 const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		console.log(regex);
		console.log(req.user);
	table.find({$or : [{iduser:regex},{name:regex},{date:regex},]},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
		
			detail.find({uname:t},function(err,calli){
				
				
					if(err){
                 
				console.log(err);
				
				}
				else{
					console.log("deta");
					console.log(calli);
					calli.forEach(function(ca){
						i=ca.image;
						console.log(ca);
						console.log(i);
						
			console.log("zdv");
					})	};
							
				
				  
			} );
					
			
			
			console.log("zdvr");
			
			console.log(i);
			var lo=ln;
	         ln=0;
			var knt=lnt;
			lnt=0;
			var ntn=nt;
			nt=0;
			call=sortJsonArray(call,'date','des');
			res.render("posts.ejs",{items:call,u:t,lo:lo,knt:knt,ntn:ntn});
		}
		
		
	});
	}
	else
		{
			console.log(req.user);
	table.find({},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
		
			detail.find({uname:t},function(err,calli){
				
				
					if(err){
                 
				console.log(err);
				
				}
				else{
					console.log("deta");
					console.log(calli);
					calli.forEach(function(ca){
						i=ca.image;
						console.log(ca);
						console.log(i);
						
			console.log("zdv");
					})	};
							
				
				  
			} );
					
			
			
			console.log("zdvr");
			
			console.log(i);
			var lo=ln;
	         ln=0;
			var knt=lnt;
			lnt=0;
			var ntn=nt;
			nt=0;
			call=sortJsonArray(call,'date','des');
			res.render("posts.ejs",{items:call,u:t,lo:lo,knt:knt,ntn:ntn});
		}
		
		
	});
			
		}
	
	

	

	
	
});
app.get("/pdelete/:uname",function(req,res){
	/*user.remove({username:req.params.uname},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
		}
		
	});*/
	detail.remove({uname:req.params.uname},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
		}
		
	});
	table.remove({iduser:req.params.uname},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
		}
		
	});
	
	res.redirect("/logout");
	
	
	
	
	
	
});









app.get("/puser/:uname",function(req,res){
	
	if(req.query.search){
		 const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		table.find({iduser:req.params.uname , $or : [{iduser:regex},{name:regex},{date:regex}]},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
				
				detail.find({uname:req.params.uname},function(err,calll){
					if(err){console.log(err)}
					else{
						var de=del;
						del=0;
						call=sortJsonArray(call,'date','des');
						res.render("puser.ejs",{items:call,u:t,det:calll,de:de,uname:req.params.uname});
					}
				});
				
				
				
			
			
		}
		
		
	})
	}
	else{
	table.find({iduser:req.params.uname},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
				
				detail.find({uname:req.params.uname},function(err,calll){
					if(err){console.log(err)}
					else{
						var de=del;
						del=0;
						
						call=sortJsonArray(call,'date','des');
						res.render("puser.ejs",{items:call,u:t,det:calll,de:de,uname:req.params.uname});
					}
				});
				
				
				
			
			
		}
		
		
	});
}
	
	
});






function islogd(req, res, next){
  
		
		table.find({_id:req.params.id},function(err,calll){
			
			if(err){
				console.log(err);
			}
			else{
				console.log("sfgd");
				calll.forEach(function(movie){
					  if(req.isAuthenticated() && movie.iduser===req.user.username){
						  
						  
                   return next();
					  }
					else{
						res.redirect("/logind");
					}
				});
				
				
				
				console.log(calll);
				
			}
			
			
		});
		
		
		
		
		
		
    }
    



app.get("/logind", function(req, res){
   res.render("logind"); 
});
//login logic
//middleware



app.post("/logind", passport.authenticate("local", {
    successRedirect: "/posts/"+lid,
    failureRedirect: "/logind"
}) ,function(req, res){
});










app.post("/profile/:uname", upload.single('image'),function(req,res){
	console.log("ds")
		var ima;
	if(req.file){
	cloudinary.v2.api.delete_resources([pimage], function(err,resk){
		if(err){
			console.log("sddadaas");
			console.log(pimage);
			console.log(resk);
			console.log(err);
		}
		
		
		else{
			console.log("uplo");
	cloudinary.uploader.upload(req.file.path, function(result) {
  // add cloudinary url for the image to the campground object under image property
  req.body.image = result.secure_url;
	
			ima=  req.body.image;
		console.log("up");
	console.log(ima);
	
	
	
		console.log("post");
	detail.update({uname:req.params.uname},{name:req.body.name,image:ima,rollno:req.body.rollno,branch:req.body.branch,email:req.body.email,add:req.body.add},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			
			res.redirect("/profile");
		}
		
		
	});
	
	});}
		
	});
	}
	else{
		detail.update({uname:req.params.uname},{name:req.body.name,image:pimage,rollno:req.body.rollno,branch:req.body.branch,email:req.body.email,add:req.body.add},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			
			res.redirect("/profile");
		}
		
		
	});
	
		
		
		
		
		
	}
	

});



app.get("/pupdate/:uname",islogd,function(req,res){
	console.log("userfesres");
	console.log(req.user.username);

	table.find({_id:req.params.id},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
			
			res.render("update.ejs",{items:call,u:t});
		}
		
		
	});
	
	
	
	
});




app.get("/update/:id",islogd,function(req,res){
	console.log("userfesres");
	console.log(req.user.username);

	table.find({_id:req.params.id},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
			
			res.render("update.ejs",{items:call,u:t});
		}
		
		
	});
	
	
	
	
});



var lid;
var edu=0;
app.post("/update/:id", upload.array('myFiles'), function(req,res){

	var m=req.body.message;
	console.log("size");
	console.log(req.files.length);
	if(req.files.length>0){
	var count=1;
    const files = req.files;
		console.log(files.length);
    for (const file of files) {
		
    		console.log(file.originalname);	
	cloudinary.v2.uploader.upload(file.path,{resource_type:"raw"}, function(error,result) {
  // add cloudinary url for the image to the campground object under image property
		
		m+="<li><a href=\""+result.secure_url+"\" style=\"color:red;\">"+file.originalname+"</a></li>"
	
		if(count==files.length){
			
			
	table.update({_id:req.params.id},{name:req.body.name,desc:m},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			edu=1;
			res.redirect("/posts/"+req.params.id);
		}
		
		
	});
		}
	count++;
			
	});	
	
	}
		
		
	}	
		else{
			console.log("dsdsvsdvsvss");
			
	table.update({_id:req.params.id},{name:req.body.name,image:req.body.image,desc:req.body.message},function(err,call){
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			edu=1;
			res.redirect("/posts/"+req.params.id);
		}
		
		
	});
		
	


		}
								  
	
	
});

	
	
	


	
	

var del=0;

app.get("/delete/:id",islogd,function(req,res){
	
	table.remove({_id:req.params.id},function(err,call){
		
		if(err){
			console.log(err);
		}
		else{
			console.log(call);
			del=1;
			res.redirect("/puser/"+req.user.username);
		}
		
		
		
	});
	
	
});


app.get("/posts/:id",function(req,res){
	
	table.find({_id:req.params.id},function(err,call){
		
		if(err){
			console.log(err);
		}
		else{
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
			var det;
			call.forEach(function(ca){
				
			detail.find({uname:ca.iduser},function(err,callt){
				if(err){
					console.log(err);
				}
				else{
					det=callt;
					console.log("details");
					console.log(det);
					
			console.log("dfsds");
			console.log(det);
					
					var ed=edu;
					edu=0;
			res.render("shows.ejs",{items:call,u:t,idi:req.params.id,det:det,ed:ed});
					
					
					
				}
				
				
				
			})				
			});
			
			
			
		}
	
	
	});
	
	
	
	
});


var pimage;



app.get("/profile/:uname",function(req,res){
	
	detail.find({uname:req.params.uname},function(err,call){
		
		if(err){
			console.log(err);
		}
		else{
			var t;
			if(req.user==null){
				t=null;
			}
			else{
				t=req.user.username;
			}
			call.forEach(function(cal){
				pimage=cal.image;
				
				console.log("ssd0");
				console.log(pimage);
			})
			
			
			res.render("profileshows.ejs",{items:call,u:t,un:req.params.uname});
		}
	
	
	});
	
	
	
	
});


var tempi=0;
function isLoggedIni(req, res, next){
    if(req.isAuthenticated() ){
		if(req.user.username=="pushkar"){
		return next();	
		}
		else{
		tempi=1;	
		}
        
    }
	
    res.redirect("/login");
}


app.get("/admin",isLoggedIni,function(req,res){
	adminpass.find({},function(err,call){
		if(err){
			console.log(err);
		}
		else{
		
		}
		
		res.render("admin.ejs",{items:call});
	});
	
	
})






app.get("*",function(req,res){
	
	res.send("<h1>ROUTE HASNOT BEEN MADE YET !!!</h1>");
	
});






app.listen(process.env.PORT ||3000,process.env.IP,function(){
	
	console.log("server has statrted");
	
});