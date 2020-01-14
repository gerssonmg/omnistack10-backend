const express = require('express');
const mongoose = require('mongoose');

//Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query( Filtros, ordenação, paginação, ...) GET
// Route Params: request.params (Identificar um recurso na alteção ou remoção) -PUT-DELETE
// Body:   -POST-PUT

// MongoDB (Não-relacional)

const app = express();

mongoose.connect('mongodb+srv://gerssonmg:gerssonmg@cluster0-gvs8c.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

app.use(express.json()); //de maneira simplificada, faz o express entender body em formato JSON

app.post('/', (request, response) => {
    return response.json({ message: 'Heldlo' });
})

app.listen(3333);