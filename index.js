const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
});
server.on('error', (err) => console.error(err));
server.on('socketError', (err) => console.error(err));

server.on('request', (request, response) => {
    console.log(request.url);
    
    //格式必须为 binary 否则会出错'./images'+request.url
    // 浏览器第一次会请求favicon.ico，会导致报错
    if(request.url !='/favicon.ico'){
    var content =  fs.readFileSync('./maximg'+request.url);   
    response.writeHead(200, {
        "Content-Type": "image/png",
        "expires":"Tue, 09 Oct 2018 11:27:20 GMT",
        "Access-Control-Allow-Origin": "http://localhost:8080"
    });
    response.write(content); //格式必须为 binary，否则会出错
    response.end();
}
});

server.listen(8444);