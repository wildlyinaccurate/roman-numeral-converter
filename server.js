var restify = require('restify');
var generator = require('./index');

var server = restify.createServer({
    name: 'roman-numeral-generator',
    version: '1.0.0',
});

server.get('/generate/:value', function(req, res, next) {
    try {
        res.send({
            value: generator.generate(req.params.value)
        });
    } catch (e) {
        res.send(400, e);
    }

    return next();
});

server.get('/parse/:value', function(req, res, next) {
    try {
        res.send({
            value: generator.parse(req.params.value)
        });
    } catch (e) {
        res.send(400, e);
    }

    return next();
});

server.listen(8000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
