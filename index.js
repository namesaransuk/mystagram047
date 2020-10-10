const PORT = process.env.PORT || 8080;
const http = require('http')
const fs = require('fs')
const path = require('path')
const hostname = '127.0.0.1'
const port = 3000;

// const handler = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain")
//     res.end("Hello World")
// })

const handler = (req, res) => {
    const filename = path.join(__dirname, 'index.html')
    const indexData = fs.readFileSync(filename)
    res.end(indexData)
}
const server = http.createServer(handler)

server.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);
