const express = require('express');
const app = express();
const musicController = require('./controllers/musicController');
const aboutController = require('./controllers/aboutController');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/', musicController);
app.use('/', aboutController);


app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
