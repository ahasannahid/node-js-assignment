const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is Home Page</h1>')
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is About Page</h1>')
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Error writing file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h3>File demo.txt created and written with</h3> <h2>hello world</h2>');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
