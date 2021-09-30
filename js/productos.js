let listaProductos=[];

function mostrarProductos(){
    let html="";
    for(producto of listaProductos){
        html += `<li><a href="#">${producto.name}</a></li>
        <li>Descripción: ${producto.descripcion}</li>
        <li>Precio: ${producto.precio}</li>`
    }

    document.getElementById("listaProductos").innerHTML = html;
}


function filtrarProductos(){
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("buscarProductos");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listaProductos");
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
    peticion("https://gist.githubusercontent.com/anaclaraolivera/ea778a89ae96a339c88b8ca265805976/raw/0bb5bc8eae260acc5ccc493f6e51f8eb578b1ecc/gistfile1.txt")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaProductos= respuesta.datos;
            console.log(listaProductos.datos)
            mostrarProductos();
        }
    }

    )
})