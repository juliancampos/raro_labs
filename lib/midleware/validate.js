const { query } = require("express");

module.exports = (req, res, next) => {
  const { page, quantityPages } = req.query;
  if (!page, !quantityPages) {
    return res.status(400).send('Invalid query parameters!');
  }

  req.query = {
    ...req.query,
    page: Number(page),
    quantityPages: Number(quantityPages)
  }

  next();
}
