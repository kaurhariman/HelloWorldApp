const express = require('express')
const cors = require("cors")
const http = require('http');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const distDir = path.join(__dirname, '../dist/helloworldapp')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

app.use(cors())
app.use(express.static(distDir))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

app.get('/*', function(req,res){
  res.sendFile(path.join(distDir + '/index.html'))
});
