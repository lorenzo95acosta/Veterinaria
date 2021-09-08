let listaOfertas=[];

function mostrarOfertas(){
    let html="";
    for(oferta of listaOfertas){
        html += `<li><a href="#">${oferta.nombre}</a></li>
        <li>Descripción del pack: ${oferta.descripcion}</li>
        <li>Precio: ${oferta.precio}</li>
        <li>Precio por oferta:${oferta.descuento}</li>`
    }

    document.getElementById("listaOfertas").innerHTML = html;
}

function filtrarOfertas(){

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("buscarOfertas");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listaOfertas");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
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