let listaOfertas=[];

function mostrarOfertas(){
    let html="";
    for(oferta of listaOfertas){
        html += `<h3>${oferta.name}</h3>
        <li>${oferta.descripcion}</li>
        <li>${oferta.precio}</li>`
    }

    document.getElementById("listaofertas").innerHTML = html;
}

document.addEventListener("DOMContentLoaded",function(e){
    peticion("https://gist.githubusercontent.com/anaclaraolivera/ea778a89ae96a339c88b8ca265805976/raw/0bb5bc8eae260acc5ccc493f6e51f8eb578b1ecc/gistfile1.txt")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaOfertas= respuesta.datos;
            mostrarOfertas();
        }
    }

    )
})