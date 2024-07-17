let NumeroSecreto = 0;
let intentos = 0; 

function asignarTextoElemento (Elemento,Texto){
    let elementoHTML = document.querySelector(Elemento); 
    elementoHTML.innerHTML = Texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
     
    if (numeroDeUsuario === NumeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número secreto en ${(intentos)} ${(intentos==1) ? 'intento' : 'intentos'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
        // el usuario falló
    } else { 
        if (numeroDeUsuario > NumeroSecreto){
            asignarTextoElemento ('p', "el número secreto es menor");
        } else {
            asignarTextoElemento ('p', "el número secreto es mayor");
        }
    }
    intentos++;
    limpiarCampo(); 
return; 
}

function limpiarCampo (){
    document.querySelector('#valorDeUsuario').value = '';
    return;
}

function generarNumeroSecreto (){
    return Math.floor(Math.random()*10)+ 1; 
}

function condicionesIniciales (){
    asignarTextoElemento ('h1', "Bienvenido al juego del número secreto");
    asignarTextoElemento ('p', "Dame un número del 1 al 10:");
    intentos = 1; 
    NumeroSecreto = generarNumeroSecreto(); 
}

function reiniciarJuego(){
    //limpiar campo 
    limpiarCampo();
    //Regresar a condiciones iniciales
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();