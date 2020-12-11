module.exports = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        req.body.created_at = req.body.created_at || Date.now();
        req.body.updated_at = req.body.updated_at || Date.now();
    }

    if (req.method === 'PATCH') {
        req.body.updated_at = req.body.updated_at || Date.now();
    }

    next();
}
