const http = require('http');



http.createServer((req,resp) =>{
    resp.writeHead(200,{'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Marco',
        edad: 32,
        url: req.url
    }
    resp.write(JSON.stringify(salida));
    resp.end();
})
.listen(8081);
console.log('Escuchando el puerto 8080');