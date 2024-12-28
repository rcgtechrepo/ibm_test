const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, data) => {
    if (err) {
      // Handle error, e.g., send a 500 error
      res.writeHead(500);
      res.end('Internal Server Error');
      return;
    }

    // Set the content type and send the HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});