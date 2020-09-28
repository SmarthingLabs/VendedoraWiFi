var intentos=3;
var username= document.getElementById("username").value;
var password= document.getElementById("password").value;

function validate(){
    if(username== Virgilio && password== W1f14dm1n){
        window.location.href="configuration.html";
    }else{
        alert("Error al ingresar datos");
        intentos --;
        if(intentos==0){
            document.getElementById("username").disabled= true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;
        }
    }
}