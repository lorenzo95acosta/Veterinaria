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

function filtrar(idBuscador, idUl){
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById(idBuscador);
        filter = input.value.toUpperCase();
        ul = document.getElementById(idUl);
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
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
   
})