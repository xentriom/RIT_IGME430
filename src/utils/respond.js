const respond = (req, res, status, type, data) => {
  let content = data;

  // If the data is an object, we need to stringify it.
  if (typeof data === "object") {
    content = JSON.stringify(data);
  }

  res.writeHead(status, {
    "Content-Type": type,
    "Content-Length": Buffer.byteLength(content, "utf8"),
  });

  if (req.method !== "HEAD" && status !== 204) {
    res.write(content);
  }

  res.end();
};

module.exports = {
  respond,
};
