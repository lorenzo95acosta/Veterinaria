function peticion(url){
    let resultado={};
    return fetch(url)
    .then(resp=>{
        if(resp.ok){
            return resp.json();
        }
        else{
            throw Error(resp.statusText);
        }
    })
    .then(json=>{
        resultado.estado = "ok";
        resultado.datos= json;
        return resultado;
    })
    .catch(error=>{
        resultado.estado = "error";
        resultado.datos = error;
        return resultado;
    })
}
function saludar(){
    let string = '';
    string += localStorage.getItem('nombre');
    let nombreUsuario = document.getElementById('nombreUsuario');
    nombreUsuario.innerHTML += string;
}


function cerrarSesion() {
    localStorage.clear();
    location.href= 'login.html';
}

document.addEventListener("DOMContentLoaded",function(e){
   saludar();
})