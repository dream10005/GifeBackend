const User = require('./userModel');

function ping() {
  return 'ping user';
}

async function callTest() {
  await User.test();
  return 'done';
}

module.exports = {
  ping,
  callTest,
};
