const http = require('http'); //método de requisição de móduto, no caso, 'http', salvo em uma váriável

//Método para criar servidor local com node.js. A função 'createServer' recebe como parâmetros a req: requisição
//e res:resposta/retorno. res.writeHeade recebe o código do estado da solicitação (200, sucesso por exemplo), e um
//type: texto.
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/plain'});
        switch (req.url) { //Um switch aplicado para cada caso com uma resposta diferente e em texto.
            case '/':
                res.end('Você está na página home!');
            break;
            case '/contato':
                res.end('Você está na página contato!');              
            break;
            default:
                res.end('Você está no nosso servidor!');
                break;
        }
    res.end('Servidor online'); //res.end('') finaliza o res.
}).listen(3000, "localhost");   //.listen é função com 2 parâmetros, porta e endereço do servidor.


const express = require('express');
const app = express();