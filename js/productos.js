let listaProductos=[];

function mostrarProductos(){
    let html="";
    for(producto of listaProductos){
        html += `<h3>${producto.name}</h3>
        <li>${producto.descripcion}</li>
        <li>${producto.precio}</li>`
    }

    document.getElementById("lista").innerHTML = html;
}

document.addEventListener("DOMContentLoaded",function(e){
    peticion("https://gist.githubusercontent.com/anaclaraolivera/ea778a89ae96a339c88b8ca265805976/raw/0bb5bc8eae260acc5ccc493f6e51f8eb578b1ecc/gistfile1.txt")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaProductos= respuesta.datos;
            mostrarProductos();
        }
    }

    )
})