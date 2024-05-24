let imagenes = [
  "./img/BizRectangular5.png",
  "./img/BizChoco.png",
  "./img/BizRectangular.png",
  "./img/BizRedondo.png",
  "./img/BizRedondo2.png",
  "./img/BizRectangular4.png",
];
let cont = 0;

function imgAnt() {
  if (cont > 0) {
    cont--;
  } else {
    cont = imagenes.length - 1;
  }
  fotoactual();
}
function imgSig() {
  if (cont < imagenes.length - 1) {
    cont++;
  } else {
    cont = 0;
  }
  fotoactual();
}
function fotoactual() {
  let contimg = document.getElementById("foto-carrusel");
  contimg.src = imagenes[cont];
}
