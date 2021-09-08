function saludar(){
    let string = ', ';
    string += localStorage.getItem('nombre');
    let nombreUsuario = document.getElementById('nombreUsuario');
    nombreUsuario.innerHTML += string;
}

document.addEventListener("DOMContentLoaded",function(e){
    saludar()
})