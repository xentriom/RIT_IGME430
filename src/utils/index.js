const { parseBody } = require("./parseBody");
const { respond } = require("./respond");
const { getParams } = require("./getParams");
const { optimizeAndUpload } = require("./optimizeImage");

module.exports = {
  parseBody,
  respond,
  getParams,
  optimizeAndUpload,
};
