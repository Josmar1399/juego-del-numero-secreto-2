
function asignarTextoElemento (Elemento,Texto){
    let elementoHTML = document.querySelector(Elemento); 
    elementoHTML.innerHTML = Texto;
}

function IntentoDeUsuario(){
    alert('intento desde el botón');
}

asignarTextoElemento ('h1', "Bienvenido al juego del número secreto");
asignarTextoElemento ('p', "Dame un número del 1 al 100:");
