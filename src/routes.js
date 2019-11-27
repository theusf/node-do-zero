const routes = require('express').Router()
const simpleHelloWorld = require('./controller/simpleHelloWorld')
const arrowHelloWorld = require('./controller/arrowHelloWorld')
const funcsObject = require('./controller/funcsobject')
const ifsTernarios = require('./controller/ifternario')




routes.get('/', (req,res) => {
    res.send("Hello World");
});

routes.get('/simplehelloworld', simpleHelloWorld );

routes.get('/arrowhelloworld', arrowHelloWorld );

routes.get('/funcsobjects/1', (req,res) => res.send( funcsObject.Func1() ) );

routes.get('/funcsobjects/2', funcsObject.Func2 );

routes.get('/ifsternarios/falso', ifsTernarios.falso );

routes.get('/ifsternarios/verdadeiro', ifsTernarios.verdadeiro );


module.exports = routes;
