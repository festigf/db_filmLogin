
var sConnection = { host: 'localhost', port: 3306, user: 'root', password: '', database: 'dbfilm' };

var mysql = require('mysql');
//var config = require('../js/local_config.js');		// inizializza la variabile "config"

exports.findById = function(id, cb) {
	//console.log("findById"+id);
    connection = mysql.createConnection(sConnection);
	//console.log("config.connection:"+config.connection.database);
    connection.connect(function(err){
		if(!err) {
			console.log("Database is connected ... ");    
		} else {
			console.log("Error connecting database ... ");    
			return cb(null, null);
			
		}
	});
	var sQuery="SELECT * FROM dbfilm.tblusers where username=?;";
	console.log(sQuery+id);
    connection.query(sQuery,id, function (err, rows, fields) {
		//console.log("username trovato rows:"+rows);
        if (!err) {
			//console.log("username trovato err:"+err);
			//console.log("username trovato rows:"+rows[0].id);
			//console.log("username trovato fields:"+fields);
            return cb(null,rows[0]);
        }
        else {
            console.log('username NON trovato:' + err)
            return cb(null, null);
        }
    });
    connection.end();

}

exports.findByUsername = function(username, cb) {
    connection = mysql.createConnection(sConnection);
	//console.log("config.connection:"+config.connection.database);
    connection.connect(function(err){
		if(!err) {
			console.log("Database is connected ... ");    
		} else {
			console.log("Error connecting database ... ");    
			return cb(null, null);
			
		}
	});
	var sQuery="SELECT * FROM dbfilm.tblusers where username=? ;";
    console.log(sQuery + "username::" + username);
    var data = [];
    data.push(username);
   // data.push(password);
    connection.query(sQuery,data, function (err, rows, fields) {
		console.log("username trovato rows:"+rows);
        if (!err) {
			
			//console.log("username trovato rows:"+rows[0].username);
			//console.log("username trovato fields:"+fields);
            return cb(null,rows[0]);
        }
        else {
            console.log('username NON trovato:' + err)
            return cb(null, null);
        }
    });
    connection.end();
  
}
