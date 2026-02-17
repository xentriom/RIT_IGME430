const { createServer } = require("http");
const { join } = require("path");
const { existsSync } = require("fs");
const { parseBody, respond } = require("./utils/index.js");

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const baseDir = join(__dirname, 'app');

const onRequest = async (req, res) => {
  const path = req.url.split('?')[0];

  const segment = path === '/' ? '' : path.slice(1).replace(/\/$/, '');
  const routePath = segment ? join(baseDir, segment, 'route.js') : join(baseDir, 'route.js');

  if (!existsSync(routePath)) {
    respond(req, res, 404, 'application/json', { 
      id: 'notFound', 
      message: 'The page you are looking for was not found.'
    });
    return;
  }

  const route = require(routePath);
  const handler = route[req.method];

  if (!handler || typeof handler !== 'function') {
    respond(req, res, 405, 'application/json', { 
      id: 'methodNotAllowed', 
      message: 'The method you are trying to use is not allowed.'
    });
    return;
  }

  if (req.method === 'POST') {
    await parseBody(req);
  }

  await handler(req, res);
}

createServer(onRequest).listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on: http://localhost:${port}`);
})