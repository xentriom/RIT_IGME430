const respond = (req, res, status, type, object) => {
  let content = object;

  // If the object is an object, we need to stringify it.
  if (typeof object === 'object') {
    content = JSON.stringify(object);
  }

  res.writeHead(status, {
    'Content-Type': type,
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  if (req.method !== 'HEAD' && status !== 204) {
    res.write(content);
  }

  res.end();
};

module.exports = {
  respond,
}