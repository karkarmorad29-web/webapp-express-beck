const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const filmRouter = require('./routers/filmRouter.js');


const corsConfig = { origin: process.env.FE_URL };
app.use(cors(corsConfig));

const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');




app.use(express.static('public'));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Ciao, mondo!');
});


app.use('http://localhost:3000/api/movies', filmRouter);

app.use(notFound);
app.use(errorsHandler);

app.listen(PORT, () => {
    console.log(`Server avviato su porta ${PORT}`);
});



