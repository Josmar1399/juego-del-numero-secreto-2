let NumeroSecreto = generarNumeroSecreto();
let intentos = 1; 

function asignarTextoElemento (Elemento,Texto){
    let elementoHTML = document.querySelector(Elemento); 
    elementoHTML.innerHTML = Texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
     
    if (numeroDeUsuario === NumeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número secreto en ${(intentos)} ${(intentos==1) ? 'intento' : 'intentos'}`);
    } else { 
        if (numeroDeUsuario > NumeroSecreto){
            asignarTextoElemento ('p', "el número secreto es menor");
        } else {
            asignarTextoElemento ('p', "el número secreto es mayor");
        }
    }
    intentos++; 
return; 
}


function generarNumeroSecreto (){
    return Math.floor(Math.random()*10)+ 1; 
}
asignarTextoElemento ('h1', "Bienvenido al juego del número secreto");
asignarTextoElemento ('p', "Dame un número del 1 al 100:");
