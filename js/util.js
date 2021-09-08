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

document.addEventListener("DOMContentLoaded",function(e){
   
})