app.get('/', (req, res)=>res.send('Olá mundo!'));//criado uma rota/spooler.

//Criando servidor usando método listen, recebe o número da porta e um callback como parametros.
app.listen(3000, ()=>console.log('Estamos usando a porta 3000!')); 