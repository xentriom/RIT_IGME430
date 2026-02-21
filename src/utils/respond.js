const respond = async (req, res, status, type, data) => {
  let content = await data;

  // If the data is an object, we need to stringify it.
  if (typeof data === "object") {
    content = JSON.stringify(await data);
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
