- Installazione titte i pacchetti: react, express,cors
- Aggiunto file index.js
- Rimozione il codice scritto in react scaricato
- Nel package.json aggiunto: "dev": "node --watch index.js",
- Nel public aggiunto gli immagini
- Creazione file: middlewares,con sotto cartelle: errorsHandler.js/notFound.js
e nelle sotto cartelle scriviamo la funzione:

function errorsHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json('Qualcosa è andato storto!');
}



module.exports = errorsHandler;

function notFound(req, res, next) {
    res.status(404).json({
        error: 'Not Found',
        message: `La risorsa ${req.originalUrl} non è stata trovata`
    });
}

module.exports = notFound;

e nel Index.js invocchiamo dopo (app.get)

app.use(notFound);
app.use(errorsHandler);




