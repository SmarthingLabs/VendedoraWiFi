const fs= require('fs').promises

fs.writeFile('dhcpcd.conf','prueba', function(req,res){
    if (err) return alert(err);
    alert("creado")
    });