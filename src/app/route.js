const { respond } = require('../utils/index.js');

const GET = (req, res) => {
  respond(req, res, 200, 'application/json', {
    message: 'Hello',
  });
};

module.exports = {
  GET,
};