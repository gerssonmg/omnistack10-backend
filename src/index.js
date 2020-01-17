const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const { setupWebsocket } = require('./websocket');
const http = require('http');
//Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query( Filtros, ordenação, paginação, ...) GET
// Route Params: request.params (Identificar um recurso na alteção ou remoção) -PUT-DELETE
// Body:   -POST-PUT

// MongoDB (Não-relacional)

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
    'mongodb+srv://gerssonmg:gerssonmg@cluster0-gvs8c.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

app.use(cors());
app.use(express.json()); //de maneira simplificada, faz o express entender body em formato JSON
app.use(routes);

server.listen(3333);