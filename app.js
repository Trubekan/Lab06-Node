const express = require('express');
const app = express();

app.use(express.static('public'));
// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Enzo Velarde Pug' });
});
app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Enzo Velarde ' + userId };
    res.render('perfil', { user: user });
  });

// Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug', (req, res) => {
    res.render('miplantilla', { mensaje: '¡Hola me llamo Enzo Velarde estoy usando Pug!' });
  });
  
  // Ruta para renderizar la plantilla EJS
  app.get('/miplantilla-ejs', (req, res) => {
    res.render('miplantilla.ejs', { mensaje: '¡Hola me llamo Enzo Velarde estoy usando plantilla EJS!' });
  });
  

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Enzo Velarde usando EJS' });
});
app.get('/yo', (req, res) => {
  res.render('contacto.ejs', { nombre: 'Enzo Velarde  EJS' });
});
app.get('/sobremi', (req, res) => {
  res.render('sobremi.ejs', { nombre: 'Enzo Velarde  EJS' });
});
// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
