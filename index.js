const { response } = require('express');
const express= require('express');
const app= express();
let fs= require('fs')
const bodyParser=require('body-parser');
const Gpio=require('onoff');


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: false}))
 
app.get('/', function(req,res){
  res.sendFile(__dirname+'/configuration.html');
console.log("Prueba")
} )
app.get('/timeout', function(req,res){
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
var contraseña = "";
for (i=0; i<8; i++){
    contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
}
  res.sendFile(__dirname+'/public/timeout.html');
  fs.writeFile('dhcpcd.conf',contraseña, function(err){
    if (err) console.log(err);
    console.log("creado")
    });
    res.send(contraseña)
console.log("Prueba")
} )


app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});