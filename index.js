const port = 3000
const express = require('express')
const app = express()
const ruta = __dirname + "/pagina.html"
const bodyParser = require('body-parser')
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', './vistas')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) =>{
    res.sendFile(ruta)


});
app.post('/prueba', (req,res) =>{
    res.render("vista1", {nombre: req.body.nombre, apellido: req.body.apellido, año: req.body.fecha} )

});
app.listen(port,() =>{
    console.log(`El servidor esta en el puerto ${port} `)
});