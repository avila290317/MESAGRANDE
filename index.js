const express = require('express');
const router = require('./routes/router.js');

const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = 3000;

// app.use(express.static('public')); 

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json())
//decodifica la informacion y la convierte en formato json//
app.use(express.urlencoded({extended:true}));



app.use("/mesagrande", router)
// Inicia el servidor
app.listen(port, () => {
  console.log(`Proyecto Invernaderos Mesa Grande esta escuchando en el http://localhost:${port}`)
});