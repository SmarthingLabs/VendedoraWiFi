var url = window.location.href;
var time = url.substring(url.indexOf("=")+1);

time=time*12;
/*var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
var contraseña = "";
for (i=0; i<8; i++){
    contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
}
*/
document.getElementById("password").innerHTML= contraseña;

  

function reducirTiempo(){
    time=time-1;
    document.getElementById("time").innerHTML= time +" minutos"
    if(time==0){
        window.location.href="index.html"
    }
}
setInterval(reducirTiempo,500)

