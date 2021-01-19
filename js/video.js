var mp4 = document.getElementById('video');
var contenido = document.getElementById('texto');
var btn = document.getElementById('volver');
var btnaudio = document.getElementById('btn-audio');
/*Ver tutorial*/
function verVideo(){
    btn.style = "display: block;";
    mp4.style = "display: block;";
    contenido.style = "display:none;";
    btnaudio.style = "display: none;";
    mp4.play();
}
/*Cerrar video*/

function volver(){
    btn.style = "display: none;";
    mp4.style = "display: none;";
    contenido.style = "display:block;";
    btnaudio.style = "display:block;";
    mp4.pause();
}