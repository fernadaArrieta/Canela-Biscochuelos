var imagenes = [
    "img/BizRectangular2.png",
    "/img/BizChoco.png",
    "/img/BizRectangular.png"
];
var cont = 0;

function imgAnt () {
    if ( cont > 0){
        cont-- ;
    }    
    else{
        cont = imagenes.length-1;
    }
    fotoactual();
}
function imgSig () {
    if ( cont < imagenes.length-1){
        cont++ ;
    }    
    else{
        cont = 0;
    }
    fotoactual();
}
function fotoactual (){
    var contimg = document.getElementById ("foto-carrusel");
    contimg.src = imagenes [cont];
}
