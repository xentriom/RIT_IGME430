const respond = async (req, res, status, type, data) => {
  let content = await data;

  // If the data is a Buffer, serve it as binary
  const isBinary = Buffer.isBuffer(content);

  // If the data is an object (but not a Buffer), we need to stringify it.
  if (!isBinary && typeof content === "object") {
    content = JSON.stringify(content);
  }

  res.writeHead(status, {
    "Content-Type": type,
    "Content-Length": isBinary
      ? content.length
      : Buffer.byteLength(content, "utf8"),
  });

  if (req.method !== "HEAD" && status !== 204) {
    res.write(content);
  }

  res.end();
};

module.exports = {
  respond,
};
