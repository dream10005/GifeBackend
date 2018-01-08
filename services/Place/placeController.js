const pool = require('./placeModel');

module.exports = {
  getAllPlaces() {
    const result = [];
    pool.getConnection((err, connection) => {
      connection.query(
        'SELECT * FROM Places',
        (err, rows) => {
          if (err) {
            result = {
              success: false,
              message: 'places not found',
            };
          } else {
            result = {
              success: true,
              result: rows,
            };
          }

          connection.release();
        },
      );
    });

    return result;
  },
};
