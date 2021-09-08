function validar(){
 
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    if((nombre !=="")&& (pass!== "")){
        localStorage.setItem('nombre', nombre);
        window.location.href="categorias.html";
    }
    else{
        alert("debe completar los campos");
    }

}



document.addEventListener("DOMContentLoaded",function(e){  

   
})

