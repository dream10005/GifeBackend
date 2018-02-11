const pool = require('../pool');

const test = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM TEST');
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
};

module.exports = {
  test,
};
