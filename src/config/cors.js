module.exports = (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Oirgin, X-Requested-With, Content-Type, Accept');
    next();
}