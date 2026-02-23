// Comments for how this file functions can be found on the original assignment:
// https://github.com/xentriom/http-api-assignment-ii/blob/master/src/utils/parseBody.js
// Everything is copied and pasted, additional comments added

const { parse } = require("querystring");
const busboy = require("busboy");

// https://www.npmjs.com/package/busboy
// A lot of code was taken from the README
const parseMultipart = (req) => {
  return new Promise((resolve, reject) => {
    const bb = busboy({ headers: req.headers });
    const fields = {};
    const files = {};

    bb.on("field", (name, value) => {
      fields[name] = value;
    });

    bb.on("file", (name, file, info) => {
      const chunks = [];
      file.on("data", (chunk) => chunks.push(chunk));
      file.on("end", () => {
        const buffer = Buffer.concat(chunks);
        files[name] = {
          buffer,
          filename: info.filename,
          mimeType: info.mimeType,
        };
      });
    });

    bb.on("finish", () => {
      req.body = fields;
      req.files = files;
      resolve();
    });

    bb.on("error", reject);
    req.pipe(bb);
  });
};

const parseBody = (req) => {
  const contentType = req.headers["content-type"] || "";

  if (contentType.includes("multipart/form-data")) {
    return parseMultipart(req);
  }

  return new Promise((resolve, reject) => {
    const body = [];

    req.on("data", (chunk) => body.push(chunk));

    req.on("end", () => {
      const bodyString = Buffer.concat(body).toString();

      // parse json if application/json
      // parse form data if application/x-www-form-urlencoded
      // otherwise set body to empty object
      if (contentType.includes("application/json")) {
        try {
          req.body = bodyString ? JSON.parse(bodyString) : {};
        } catch {
          req.body = {};
        }
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        req.body = parse(bodyString);
      } else {
        req.body = {};
      }

      resolve();
    });

    req.on("error", reject);
  });
};

module.exports = {
  parseBody,
};
