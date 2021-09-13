function obtenerValores(){
    let date = '2021-21-07';
    let coment = 'Esto es un comentario';
    coment = document.getElementById('comentario').value;
    date = document.getElementById('fecha').value;
    string += `<p> `+date+`</p>
    <p>`+coment+`</p>`
    let contenedor = document.getElementById('comentarioAExponer');
    contenedor.innerHTML = string;
}

function mostrarComentario(){
    let coment = sessionStorage.getItem('comentario');
    let date = sessionStorage.getItem('fecha');
    let string ='';
    if (coment != undefined && date  != undefined ){
        string += `<p> `+date+`</p>
        <p>`+coment+`</p>`
        let contenedor = document.getElementById('comentarioAExponer');
        contenedor.innerHTML = string;
    }

}

document.addEventListener('DOMContentLoaded', function() {
    mostrarComentario();
})