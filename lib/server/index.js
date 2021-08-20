const express = require('express');
const config = require('../../config');
const routes = require('../routes');
const app = express();

const init = () => {
  routes(app);
  app.listen(config.port, () => console.log(`server started at port: ${config.port} `));
}

module.exports = {
  start: () => init(),
  stop: () => console.log('stoping server ...')
}
