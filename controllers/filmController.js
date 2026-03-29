const db = require('../data/db');

function index(req, res) {
    const sqlQuery = 'SELECT * FROM movies';

    db.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Errore durante la query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(results);
    });
}

function show(req, res) {
    const id = req.params.id;
    const sqlQuerymovies = 'SELECT * FROM movies WHERE id = ?';
    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';




    db.query(sqlQuerymovies, [id], (err, results) => {
        if (err) {
            console.error('Errore durante la query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0 || results[0].id !== parseInt(id)) {
            return res.status(404).json({ error: 'Film non trovato' });
        }

        const movie = results[0];
        console.log('film iniziale', movie);

        db.query(sqlReviews, [movie.id], (err, reviews) => {
            if (err) {
                console.error('Errore durante la query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            results[0].reviews = reviews;

            movie.reviews = reviews;

            console.log('reviews', reviews);
            console.log('film con reviews', movie);

            res.json(results[0]);
        });

    });
}



module.exports = { index, show };