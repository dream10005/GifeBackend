const mysql = require('mysql');

const pool  = mysql.createPool({
  host     : '103.70.5.81',
  user     : 'gifebeta_root',
  password : 'password',
  database : 'gifebeta_db',
});

let a = [];

module.exports	= {
	hello: function() {
		pool.getConnection(function(err, connection) {
		    connection.query("SELECT * FROM Places", function(err, rows) {
		    	console.log(rows[1]);
		    	for (var i = 0; i <= rows.length - 1; i++) {
		    		a[i] = rows[i];
		    		console.log(a[i]);
		    	}
		        connection.release();
		    });
		});
		return a[1];
	}
};