/*Abrir menu */
$("#menu").click(
    function(){
        $("#options").fadeToggle();
        $("#menu").css("display","none");
        $("#cerrar").css("display","inline");
    }
    
);
/*Cerrar menu */
$("#cerrar").click(
    function(){
        $("#options").fadeOut(100);
        $("#cerrar").css("display","none");
        $("#menu").css("display","inline");
    }
);
