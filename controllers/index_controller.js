const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '103.70.5.81',
  user     : 'gifebeta_root',
  password : 'password',
  database : 'gifebeta_db',
});

connection.connect(function(err) {
	if (err) {
		console.log(err);
	}
	connection.query("SELECT place_name FROM Places WHERE place_id = 1", function (err, result){
		if (err) {
			console.log(err);
		}
		console.log(result);
	});
});

module.exports	= {
	hello: function() {
		return "Hello";
	}
};