const User = require('./userModel');

function ping() {
  return 'ping user';
}

async function callTest() {
  const res = await User.test();
  return res;
}

module.exports = {
  ping,
  callTest,
};
