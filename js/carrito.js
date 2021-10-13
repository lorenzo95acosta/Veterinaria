//url para carrito https://virmorrone.github.io/veterinaria-api/carrito-final.json
let productosCarrito=[];

/*completa la función para actualizar el subtotal del producto al modificar la cantidad del mismo*/
function updateProductoSubtotal(costo, total, id){
    let subtotal = document.getElementById(id);
    subtotal.innerHTML =costo*total;
}

/*modificar la función showCarrito para que aparezca el subtotal del producto en base a la cantidad y precio unitario*/
function showCarrito(){
    /*mostrar los productos del carrito con el input correspondiente a la cantidad*/
    let htmlToAppend = "";
    for(let  i =  0; i <  productosCarrito.length ; i++){
        
        htmlToAppend += `
        <tr >
        <td><img src="${productosCarrito[i].src}" class = "img-fluid" style ="max-width:50px!important"></td>
        <td class="align-middle">${productosCarrito[i].name}</td>
        <td class="align-middle">${productosCarrito[i].currency} ${productosCarrito[i].unitCost}</td>
        <td class="align-middle"><input type="number" id="cant${i}" min ="1" value=${productosCarrito[i].count} onChange="updateProductoSubtotal(${productosCarrito[i].unitCost}, this.value , ${i}); sumaTotal()"></td>
        <td class="align-middle subtotal"  id="${i}"></td>
        </tr>`                      
    }
    document.getElementById("carrito").innerHTML = htmlToAppend;
}


function sumaTotal(){
    let suma = 0
    let subtotal = document.getElementsByClassName("subtotal");
    for(valor of subtotal){
        suma += parseInt(valor.innerHTML);
    }
    let total = document.getElementById('totalCarrito');
    total.innerHTML = "El total de su pedido es: " + suma;
}


function getCarrito(url){
    
    return fetch(url)
    .then(respuesta=>{
        return respuesta.json();
    })
    
}

function verCantidad(){

}

document.addEventListener("DOMContentLoaded", function(e){
    getCarrito("https://virmorrone.github.io/veterinaria-api/carrito-final.json")
    .then(respuesta=>{
        productosCarrito = respuesta.articles;
        showCarrito();
        console.log(productosCarrito);
    })
    updateProductoSubtotal()
    verCantidad();
})
