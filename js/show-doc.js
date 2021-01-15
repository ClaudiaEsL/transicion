
/*Prueba*/ 
function introduccion(){
    $(document).ready(function () {
        $('#contendido-pagina').load('./1.intro.html');
    });
}
function informacion(){
    $(document).ready(function () {
        ruta = './2.informacion.html';
        $('#contendido-pagina').load('./2.informacion.html');
    });
}
function obtener(){
    $(document).ready(function () {
        $('#contendido-pagina').load('./3.obtener-organizar.html');
    });
}
function documentos(){
    $(document).ready(function () {
        $('#contendido-pagina').load('./documentos.html');
    });
}
