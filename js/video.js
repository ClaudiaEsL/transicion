var mp4 = document.getElementById('video');
var btn = document.getElementById('volver');
var btnVerVideo = document.getElementById('btn-ver-video');
var btnaudio = document.getElementById('btn-audio');
/*Ver tutorial*/
function verVideo(){
    $("#video").fadeIn();
    btnVerVideo.style = "display:none;";
    btn.style = "display: block;";
    btnaudio.style = "display: none;";
    mp4.play();
}
/*Cerrar video*/

function volver(){
    btnVerVideo.style = "display:block;";
    btn.style = "display: none;";
    $("#video").fadeOut();
    btnaudio.style = "display:block;";
    mp4.pause();
}