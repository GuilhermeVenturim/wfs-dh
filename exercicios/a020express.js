//Método para importar módulo express (framework node para criação de servidor local). Salvo em variavel tipo const.

const express = require('express');

//Váriavel que guarda as funcionalidades do express para ser usada posteriormente.
const app = express();

app.get('/', (req, res)=>res.send('Olá mundo!'));//criado uma rota/spooler.

//Criando servidor usando método listen, recebe o número da porta e um callback como parametros.
app.listen(3000, ()=>console.log('Estamos usando a porta 3000!')); 



