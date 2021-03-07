const express = require('express');
const cors = require('cors');

const router = require('../network/routes');

const app = express();

app.use(cors());
app.use(express.json());

router(app);

//app.use('/app', express.static('public')); //Temporal: linea y ruta la tengo que retirar despues de hacer el front con Vue

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');