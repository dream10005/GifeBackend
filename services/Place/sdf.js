const pool = require('./placeModel');

module.exports = {
	getAllPlaces() {
		pool.getConnection(function(err, connection) {
		    connection.query("SELECT * FROM Places", function(err, rows) {
		    	if (err) {
		    		result = {
		    			"success": false,
		    			"message": "places not found" 
		    		};
		    	}
		    	for (var i = 0; i <= rows.length - 1; i++) {
		    		a[i] = rows[i];
		    	}
		    	result = {
		    		"success": true,
		    		"result": a
		    	};
		        connection.release();
		    });
		});
		return result;
	}


};