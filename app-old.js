
const http = require('http');
const port= 8080;


http.createServer((req, res)=>{
    console.log('Hola mundo en la consola');
    // res.writeHead(203); // indica el codigo del status de la peticion
    // res.writeHead(203, {'content-type': 'text/plain'}); // indica el tipo de respuesta: archivo en forma de texto
    // res.writeHead(203, {'content-type': 'application/json'}); // indica el tipo de respuesta: archivo en forma de json
    const persona = {
        id      :1,
        nombre  : 'Nelson'
    }
    
    res.write(JSON.stringify(persona));
    // res.write('Hola mundo en el html | Page not found');
    res.end();

}).listen(port);

console.log(`Escuchando en el puerto ${port} ahora `)