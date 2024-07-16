let NumeroSecreto = generarNumeroSecreto();
console.log(NumeroSecreto);

function asignarTextoElemento (Elemento,Texto){
    let elementoHTML = document.querySelector(Elemento); 
    elementoHTML.innerHTML = Texto;
}

function IntentoDeUsuario(){
    alert('intento desde el botón');
}

function generarNumeroSecreto (){
    return Math.floor(Math.random()*10)+ 1; 
}
asignarTextoElemento ('h1', "Bienvenido al juego del número secreto");
asignarTextoElemento ('p', "Dame un número del 1 al 100:");
