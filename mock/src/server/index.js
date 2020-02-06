import http from 'http'
import log from './../logger';

export default function createServer(port, requestHandler) {
  const server = http.createServer(requestHandler);
  server.listen(port, err => {
    if (err) return log.error(err, 'Server');
    log.success(`Server is listening on ${port}`);
  });
}
