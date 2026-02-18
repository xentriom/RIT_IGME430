function getParams(req) {
  const url = new URL(req.url, "http://localhost");
  const params = {};

  // Iterate over the search params and add them to the params object
  for (const [key, value] of url.searchParams.entries()) {
    params[key] = value;
  }

  return params;
}

module.exports = {
  getParams,
};
