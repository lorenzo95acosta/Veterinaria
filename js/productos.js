let listaProductos=[];

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
    peticion("https://api.npoint.io/89dfbc7824a6ef5ba341")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaProductos= respuesta.datos;
            mostrarProductos();
        }
    }

    )
})