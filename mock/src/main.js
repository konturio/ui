import log from './logger';
import createServer from './server';
import resolvePath from './pathResolver';
import generateResponse from './responseGenerator';
import { NOT_EXIST } from './errors.types';

const HEADERS = {
  'Access-Control-Allow-Origin': '*'
};

function main(port) {
  createServer(port, async (request, response) => {
    try {
      const { path, variables } = await resolvePath(request);
      const responseData = await generateResponse({ path, variables });
      log.debug(responseData);
      response.writeHead(200, { ...HEADERS, 'Content-Type': 'application/json' });
      response.end(responseData);

    } catch (error) {
      log.error(error)
      if (error.message === NOT_EXIST) {
        response.writeHead(404, HEADERS);
        response.end(`Not found: ${ request.url } not serving`);
      } else {
        response.writeHead(500, HEADERS);
        response.end(error.message);
      }
    }
  });
}

try {
  main(process.env.PORT || 5000);
}
catch(e) {
  log.error(e)
}