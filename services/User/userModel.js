const pool = require('../pool');

const test = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM lol');
    return res.rows[0].lol;
  } catch (err) {
    return err;
  } finally {
    client.release();
  }
};

module.exports = {
  test,
};
