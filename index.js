const express = require('express');

//Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query( Filtros, ordenação, paginação, ...) GET
// Route Params: request.params (Identificar um recurso na alteção ou remoção) -PUT-DELETE
// Body:   -POST-PUT

const app = express();

app.use(express.json()); //de maneira simplificada, faz o express entender body em formato JSON

app.post('/', (request, response) => {
    return response.json({ message: 'Heldlo' });
})

app.listen(3333);