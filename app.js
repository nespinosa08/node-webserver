require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()

const port = process.env.PORT;


// Para insertar las propiedades del objeto del controlador en el html
app.set('view engine', 'hbs');

// middleware para servir contenido estatico
app.use(express.static('public')); 

// Para uso de los partials
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// app.get('/', (req, res)=> {
//   res.send('Home page')
// })


// usando los partials
app.get('/', (req, res)=> {
  res.render('home', {
    propiedad1: 'Nelson Espinosa',
    propiedad2: 'Web developer',
    titulo: 'Curso de Node.js'
  })
})
app.get('/generic', (req, res)=> {
  res.render('generic', {
    propiedad1: 'Nelson Espinosa',
    propiedad2: 'Web developer',
    titulo: 'Curso de Node.js'
  })
})
app.get('/elements', (req, res)=> {
  res.render('elements', {
    propiedad1: 'Nelson Espinosa',
    propiedad2: 'Web developer',
    titulo: 'Curso de Node.js'
  })
})

app.get('/venezuela', (req, res)=> {
  res.send('Pagina en ruta de Venezuela!!!!')
})
// app.get('*', (req, res)=> {
//   res.send('cualquier otra pagina no especificada: 404 | Page not found')
// })




// Para trabajar con middleare usandao la carpeta public
app.get('/generic', (req, res)=> {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res)=> {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res)=> {
  res.sendFile(__dirname + '/public/404.html') //sendFile para enviar el archivo. se de be indicar eel path absoluto, o sea: __dirname + 'path donde esta el archivo'
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })