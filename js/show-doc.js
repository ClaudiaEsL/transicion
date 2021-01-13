var ruta = './1.intro.html';

$(document).ready(function () {
    $('#contendido-pagina').load(ruta);
});
function introduccion(){
    $(document).ready(function () {
        $('#contendido-pagina').load('./1.intro.html');
        $("#options").css("display","none").slideUp(1000);
        $("#cerrar").css("display","none");
        $("#menu").css("display","inline");
    });
}
function informacion(){
    $(document).ready(function () {
        ruta = './2.informacion.html';
        $('#contendido-pagina').load('./2.informacion.html');
        $("#options").css("display","none").slideUp(1000);
        $("#cerrar").css("display","none");
        $("#menu").css("display","inline");
    });
}
function obtener(){
    $(document).ready(function () {
        $('#contendido-pagina').load('./3.obtener-organizar.html');
        $("#options").css("display","none").slideUp(1000);
        $("#cerrar").css("display","none");
        $("#menu").css("display","inline");
    });
}
function documentos(){
    $(document).ready(function () {
        $('#contendido-pagina').load('./documentos.html');
        $("#options").css("display","none").slideUp(1000);
        $("#cerrar").css("display","none");
        $("#menu").css("display","inline");
    });
}
