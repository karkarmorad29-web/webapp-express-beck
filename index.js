const express = require('express');
const app = express();
const PORT = 3000;


const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');




app.use(express.static('public'));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Ciao, mondo!');
});

app.use(notFound);
app.use(errorsHandler);

app.listen(PORT, () => {
    console.log(`Server avviato su porta ${PORT}`);
});



