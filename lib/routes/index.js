const { pageController } = require('../controller');
const { validate } = require('../midleware');


module.exports = (app) => {
  app.get('/pages', validate, pageController);
}
