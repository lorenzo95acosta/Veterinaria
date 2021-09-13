function obtenerValores(){
    let date = '2021-21-07';
    let coment = 'Esto es un comentario';
    coment = document.getElementById('comentario').value;
    date = document.getElementById('fecha').value;
    sessionStorage.setItem('comentario', coment);
    sessionStorage.setItem('fecha', date);
}

document.addEventListener(DOMcon)