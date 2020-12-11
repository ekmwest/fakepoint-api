module.exports = (req, res, next) => {
    res.set('Access-Control-Max-Age', '600');
    next();
}
