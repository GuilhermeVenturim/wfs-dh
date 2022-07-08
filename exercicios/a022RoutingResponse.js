import express from 'express';
const app = express();


let produto = {
  tipoProduto: null,
  preco: null,
  quantidade: null
}

app.post("/produto/criar", (req, res)=>res.send(produto={tipoProduto:"living",preco:1234,quantidade:300}))

console.log(produto)
