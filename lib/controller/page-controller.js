const { paginatorService } = require('../services');

module.exports = (req, res) => {
  try {
    const result = paginatorService(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);    
  }
};
