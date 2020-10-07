
var marcada = 0;
var precio=0;
function asignarNota(valor) {
   marcada = valor;
   marcarNota(marcada);
}

function marcarNota(id) {
   if(id>0)
   {
      document.getElementById("input"+id).style.backgroundColor='#0f031f';
      document.getElementById("input"+id).style.color='white';
      /*var opcion = confirm("Comprará "+ id + " horas de WiFi");
      if (opcion == true) {
        window.location.href="contador.html?precio="+id, '_blank';
     } else {
         mensaje = "Has clickado Cancelar";
     }*/

     window.location.href="contador.html?precio="+id, '_blank';

   }
}


