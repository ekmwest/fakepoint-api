module.exports = (req, res, next) => {
    const [err, success] = authenticate(req);

    if (success) {
        next();
    } else {
        res.set('WWW-Authenticate', 'Basic');
        res.status(401).send(err);
    }
}

function authenticate(req) {
    if (process.env.NODE_ENV === 'development')
        return [null, true];

    if (!req.headers.authorization)
        return ['Authorization header required.', false];

    const [authType, credentials] = req.headers.authorization.split(' ');

    if (authType !== 'Basic')
        return ['Authentication type should be Basic', false];

    if (!process.env.API_KEYS.split(' ').includes(credentials))
        return ['Invalid credentials.', false];

    return [null, true];
}
