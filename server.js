// fazendo a requisição que irá retornar uma função
const express = require('express');

// mongoose requisição
const mongoose = require('mongoose');
// coloco a função em uma variavel e executo a função
const app = express();

// iniciando data base
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true });

// criando a primeira rota
app.get("/", (req, res) =>  {
    // resposta que aparece no html
    res.send('aaaaaaaaaaaaaaa')
});
// porta para acessar a api
app.listen(3001);