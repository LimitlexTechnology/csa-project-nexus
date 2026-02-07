import { onRequest } from 'firebase-functions/v2/https';
  const server = import('firebase-frameworks');
  export const ssrcsaapp4c6c6web = onRequest({}, (req, res) => server.then(it => it.handle(req, res)));
  