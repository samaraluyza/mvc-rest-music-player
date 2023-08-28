const express = require('express');
const app = express();
const musicController = require('./controllers/musicController');
//const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

//app.use(bodyParser);
app.use(express.json());
app.use('/', musicController);


app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
