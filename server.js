const http = require('http');
const fs = require('fs');
const { stringify } = require('querystring');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === '/') {
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
    } else if (url === '/about') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        "key":"value"
      }));
    } else if (url === '/logo.png') {
      contentType = 'image/png';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(`${__dirname}/${url}`).pipe(res);
    }
});

server.listen(8080, () => {
  console.log('Server listening on port 3000');
});