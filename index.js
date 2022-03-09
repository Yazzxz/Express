const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const ruta = path.join(__dirname, '/pagina.html');
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/", (req, res) => {
    res.sendFile(ruta);
    //console.log(__dirname + '/pagina.html');

});
app.post("/mensaje", (req, res) => {
    res.send("hola " + req.body.user_name + " " + req.body.user_name2);

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
}); 