let productoCarrito=[];

function mostrarCarrito() {

    let carrito= "";
    carrito += `
    <th scope="row">${productoCarrito.name}</th>
          <td>${productoCarrito.descripcion}</td>
          <td>${productoCarrito.precio}</td>
          <td> 
          <div class="form-group">
          <label for="score"></label>
          <select class="form-control" id="cantidad">
            <option disabled selected>Seleccione un número</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
          </td>
          <td></td>
    
    `

document.getElementById("carrito").innerHTML = carrito;
}

function hacerSubtotal() {
    let cantidad = document.getElementById("cantidad").value;
}


document.addEventListener("DOMContentLoaded",function(e){
    peticion("https://gist.githubusercontent.com/anaclaraolivera/9dcfbac7a26d61e54ae27d22bdd0fb92/raw/fdd065f0617ceaa5b9e783944233ffe648aae370/carrito.json")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            productoCarrito= respuesta.datos;
            console.log(productoCarrito.datos)
            mostrarCarrito();
        }
    }
    )
})

