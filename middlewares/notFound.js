function notFound(req, res, next) {
    res.status(404).json({
        error: 'Not Found',
        message: `La risorsa ${req.originalUrl} non è stata trovata`
    });
}

module.exports = notFound;