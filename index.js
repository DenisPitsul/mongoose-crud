const http = require('http');
const app = require('./app');
require('./models');

const PORT = process.env.PORT ?? 5001;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening port ${PORT}`);
});
