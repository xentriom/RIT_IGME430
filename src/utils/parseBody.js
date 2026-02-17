// Comments for how this file functions can be found on the original assignment:
// https://github.com/xentriom/http-api-assignment-ii/blob/master/src/utils/parseBody.js
// Everything is copied and pasted

const { parse } = require("querystring");

const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    const body = [];

    req.on("data", (chunk) => body.push(chunk));

    req.on("end", () => {
      const bodyString = Buffer.concat(body).toString();
      req.body = parse(bodyString);
      resolve();
    });

    req.on("error", reject);
  });
};

module.exports = {
  parseBody,
};
