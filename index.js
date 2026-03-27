const express = require('express');
const app = express();
const PORT = 3000;
const filmRouter = require('./routers/filmRouter.js');


const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');




app.use(express.static('public'));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Ciao, mondo!');
});

app.use('/films', filmRouter);

app.use(notFound);
app.use(errorsHandler);

app.listen(PORT, () => {
    console.log(`Server avviato su porta ${PORT}`);
});



