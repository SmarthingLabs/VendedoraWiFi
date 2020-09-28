var url = window.location.href;
var sw = url.substring(url.indexOf("=")+1) * 5;

var insertado=0;
document.getElementById("precio").innerHTML= "Pendientes: $"+sw
document.getElementById("insertado").innerHTML= "Insertado: $"+insertado
var monedero= new Gpio('17','in','both');
monedero.watch( ( err, value ) => {
  if( err ) {
    console.log( 'Error', err );
  }

  // log pin value (0 or 1)
  aumentar();
} );
 function aumentar(){
     insertado=insertado+5;
     document.getElementById("insertado").innerHTML= "Insertado: $"+insertado
     if(insertado==sw){
        window.location.href="timeout.html?insertado="+insertado, '_blank';
    }
 }


