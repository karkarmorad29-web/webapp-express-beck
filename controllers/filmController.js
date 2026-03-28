const db = require('../data/db');

function index(req, res) {
    const sqlQuery = 'SELECT * FROM films';

    db.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Errore durante la query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(results);
    });
}

function show(req, res) {
    const id = req.params;
    const sqlQueryFilms = 'SELECT * FROM films WHERE id = ?';
    const sqlReviews = 'SELECT * FROM reviews WHERE film_id = ?';




    db.query(sqlQueryFilms, [id], (err, results) => {
        if (err) {
            console.error('Errore durante la query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0 || results[0].id !== parseInt(id)) {
            return res.status(404).json({ error: 'Film non trovato' });
        }

        const film = results[0].id;
        console.log('film iniziale', film);

        db.query(sqlReviews, [film], (err, reviews) => {
            if (err) {
                console.error('Errore durante la query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            results[0].reviews = reviews;

            film.reviews = reviews;

            console.log('reviews', reviews);
            console.log('film con reviews', film);

            res.json(results[0]);
        });

    });
}



module.exports = { index, show };