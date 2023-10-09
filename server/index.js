//imports
const http = require('http');
const app = require('./src/config/express.config');

//server
const server = http.createServer(app);

//listening port
const PORT = 8080;
server.listen(PORT, (err)=>{
    console.log("Server is up at " + PORT)
    console.log("Press CTRL+C to stop running server")
    console.log("Browse at http://localhost:"+PORT)
})