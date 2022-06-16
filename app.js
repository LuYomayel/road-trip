require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public'))

// app.get('/', (req,res)=> {
//     res.render('home', {
//         nombre: 'Luciano',
//         titulo: 'Alta pagina'
//     })
// });

// app.get('/generic', (req,res)=> {
//     res.render('generic', {
//         nombre: 'Luciano',
//         titulo: 'Alta pagina'
//     })
// });

// app.get('/elements', (req,res)=> {
//     res.render('elements', {
//         nombre: 'Luciano',
//         titulo: 'Alta pagina'
//     })
// });

app.get('*', (req,res)=> {
    res.sendFile( __dirname + '/public/index.html')
});

app.listen(port, () => console.log(`Listening to ${port}`))

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})