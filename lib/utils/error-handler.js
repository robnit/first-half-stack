module.exports = (err, req, res) => {
    console.log('I AM ERROR', err);
    res.statusCode = 500;
    res.end(err.message);
};