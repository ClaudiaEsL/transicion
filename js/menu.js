/*Abrir menu */
$("#menu").click(
    function(){
        $("#options").css("display","block").slideDown(1000);
        $("#menu").css("display","none");
        $("#cerrar").css("display","inline");
    }
    
);
/*Cerrar menu */
$("#cerrar").click(
    function(){
        $("#options").css("display","none").slideUp(1000);
        $("#cerrar").css("display","none");
        $("#menu").css("display","inline");
    }
);
