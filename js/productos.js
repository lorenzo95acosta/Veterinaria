let listaProductos=[];

function saludar(){
    let string = ', ';
    string += localStorage.getItem('nombre');
    let nombreUsuario = document.getElementById('nombreUsuario');
    nombreUsuario.innerHTML += string;
}

function mostrarProductos(){
    let html="";
    for(producto of listaProductos){
        html += `<h3>${producto.nombre}</h3>
        <li>${producto.descripcion}</li>
        <li>${producto.precio}</li>`
    }

    document.getElementById("lista").innerHTML = html;
}

document.addEventListener("DOMContentLoaded",function(e){
    saludar();
    peticion("https://api.npoint.io/89dfbc7824a6ef5ba341")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaProductos= respuesta.datos;
            mostrarProductos();
        }
    }

    )
})