const app = require('./app');
const http = require('http');
const { PORT, SECRET } = require('./utils/config');
const connectToDB = require('./db');

connectToDB();

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(SECRET);
    console.log(`Server running on port ${PORT}`);
  });