const { send } 			= require('micro');
const { router, get }	= require('microrouter');
const mysql 			= require('mysql');

const hello		= () => 'hello GIFE!!';

const notFound	= (req, res) => send(res, 404, 'Not Found !! use /hello');

module.exports	= router(
  get('/hello', hello),
  get('/*', notFound),
);