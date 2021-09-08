let listaOfertas=[];

function mostrarOfertas(){
    let html="";
    for(oferta of listaOfertas){
        html += `<h3><a href="#">${oferta.nombre}</a></h3>
        <li>Descripción del pack: ${oferta.descripcion}</li>
        <li>Precio: ${oferta.precio}</li>
        <li>Precio por oferta:${oferta.descuento}</li>`
    }

    document.getElementById("listaOfertas").innerHTML = html;
}

document.addEventListener("DOMContentLoaded",function(e){
    peticion("https://gist.githubusercontent.com/anaclaraolivera/50f67c8402d6bc94c98093326526de55/raw/9528dafb2a55dbd022c0962dbc2dc7371eeadff9/gistfile1.txt")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaOfertas= respuesta.datos;
            mostrarOfertas();
        }
    }

    )
})