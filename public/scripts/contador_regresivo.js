
var url = window.location.href;
var time = url.substring(url.indexOf("=")+1);
time=time*12;
var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
var contraseña = "";
for (i=0; i<8; i++){
    contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
}
 
document.getElementById("password").innerHTML= contraseña;

  
/*var start=confirm("La contraseña es: " + contraseña); 
if (start=true){
    reducirTiempo();
}*/
function reducirTiempo(){
    time=time-1;
    document.getElementById("time").innerHTML= time +" minutos"
    if(time==0){
        window.location.href="index.html"
    }
}
setInterval(reducirTiempo,500)
const { Buffer } = require('buffer');
var fs = require('fs');
fs.writeFile('/hello.txt', 'Hello world!', function(err) {
    // If an error occurred, show it and return
    if(err) return console.error(err);
    // Successfully wrote to the file!
  });
  var buffer = new Buffer([ 0x48, 0x65, 0x6c, 0x6c, 0x6f ]);
fs.writeFile('binary.txt', buffer, function(err) {
  // If an error occurred, show it and return
  if(err) return console.error(err);
  // Successfully wrote binary contents to the file!
});

