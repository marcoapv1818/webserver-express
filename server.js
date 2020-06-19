const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port= process.env.PORT || 3000;

app.use(express.static(__dirname + '/public' ));

hbs.registerPartials(__dirname +'/views/parciales')

//EXPRESS hbs
app.set('view engine', 'hbs');

app.get('/about',(req,res) => {

    res.render('about',{
        nombre: 'Marco',
        anio:new Date().getFullYear()
    });

});

app.get('/',(req,res) => {

    res.render('home',{
        nombre: 'Marco',
        anio:new Date().getFullYear()
    });

});

app.listen(port , () => 
console.log(`Escuchando peticiones en el puerto ${port}`)
);