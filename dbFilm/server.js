var express = require('express');
var mysql = require('mysql');
const util = require('util');
var sConnection={
		host: 'localhost',
		port: 3306, 
		user: 'root',
		password: '',
		database: 'dbfilm',
		multipleStatements: true};
var app = express();
app.use(express.static('.')); // Consente modalità "static"
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*'); //'http://localhost:8888');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.get("/listAttori",function(req,res){
	connection= mysql.createConnection(sConnection)	;
	connection.connect(function(err){
		if (!err){
			var sQuery="select * from attori;";	
			connection.query(sQuery,function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500); //Internal Server Error
				else
				res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows); //resituisce tutti i records in formato json
				//console.log(rows)
			})
		}
	})
})
  
app.get("/getData",function(req,res){
	connection= mysql.createConnection(sConnection)	;
	connection.connect(function(err){
		if (!err){
			var sQuery="call dbfilm.getData(?,?,?, @nRows, @nPages); select @nRows as nRows, @nPages as nPages";	
			var data=[];
			// console.log("del Attore:"+util.inspect(req, {showHidden: false, depth: null}));
			data.push(req.query.tableName);
			data.push(req.query.pageIndex);
			data.push(req.query.pageSize);
			
			//console.log(data);
	        
			connection.query(sQuery,data,function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500); //Internal Server Error
				else
				//res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows); //resituisce tutti i records in formato json
				console.log(rows);
			})
		}
	})
})

app.delete('/delAttore', function(req, res) {
	console.log("delAttore");
	//res.setHeader('Access-Control-Allow-Origin','*');
	connection = mysql.createConnection(sConnection);
    connection.connect(function(err){ // callback
    if(!err) {
      var sQuery="delete from attori where codAttore=?;";
      var data=[];
	 // console.log("del Attore:"+util.inspect(req, {showHidden: false, depth: null}));
      data.push(req.query.codAttore);
	  console.log(req.query.codAttore);
	  console.log(data[0]);
      connection.query(sQuery, data, function(err, rows, fields) {
				console.log("err");
				console.log(err);
				
        if (err) 
          res.sendStatus(500); //Internal Server Error
				else if (rows.affectedRows==0){
					console.log("affectedRows");

					res.sendStatus(401); //non ha trovato il cliente 
				}
        else   {
					console.log("Cancellato");
					res.status(200).send({status: 200, Message: "Del OK" });
					//res.sendStatus(200); // Attore cancellato con successo!
				}
      }); 
    } else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500); //Internal Server Error
    }
  });
});

// aggiorna i dati di un attore tra,ite codAttore. Se non trovato lo inserisce
app.put('/ModAttore', function(req, res){
	//console.log("ModAttore:"+util.inspect(req, {showHidden: false, depth: null}));

	console.log(req.query.nome);
	//res.setHeader('Access-Control-Allow-Origin','*');
	connection = mysql.createConnection(sConnection);
	connection.connect(function(err){
    if(!err) {
		var sQuery="UPDATE attori SET nome = ?, annoNascita = ?, nazionalita = ? WHERE codAttore = ?;";
		var data = [];
		console.log(req.query.codAttore);
		console.log(req.query.nome);
		console.log(req.query.annoNascita);
		console.log(req.query.nazionalita);
		data.push(req.query.nome);
		data.push(req.query.annoNascita);
		data.push(req.query.nazionalita);
		data.push(req.query.codAttore);
		connection.query(sQuery, data, function(err, rows, fields) {
			if (err) 
			{	console.log(err);
				res.sendStatus(500); //Internal Server Error
			}
			else if (rows.affectedRows==0)
			{
				var sQuery2="INSERT INTO attori(nome, annoNascita, nazionalita) VALUES(?,?,?)";
				connection.query(sQuery2, data, function(err, rows, fields) {
					if (err) 
					{
						console.log(err);
						res.sendStatus(500); //Internal Server Error
					}						
					else   
					//res.status(200).send({ status:200, Message: "Ins OK" });
					res.status(200).send({ 
						status:  200, 
						Message: "Ins OK",
						data: 	 req.query  
					});
					//	res.sendStatus(200)
				});
			}
			else   
			{
				//res.sendStatus(200)
				res.status(200).send({ 
						status:  200, 
						Message: "Mod OK",
						data:    req.query   
					});
			}
		  }); 
	} else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500); //Internal Server Error
    }
  });
});

app.put('/authenticate', function(req, res){
//	 console.log("authenticate:"+util.inspect(req, {showHidden: false, depth: null}));
     
	console.log(req.query.username);
	console.log(req.query.password);
	res.status(200).send({ 
		status:  200, 
		Message: "Auth OK",
		data:    {username:"pippo",
				  url:"/"}   
	});
	/*
	res.status(401).send({ 
		status:  200, 
		Message: "Auth OK",
		data:    {username:"pippo",
				  url:"/login"}   
	});*/
});
    
app.listen(3000);
console.log("http://localhost:3000/listAttori!");