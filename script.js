let paginaActual = 0;
const paginas = document.querySelectorAll(".pagina");

function siguiente(){

    paginas[paginaActual].classList.remove("activa");

    paginaActual++;

    if(paginaActual < paginas.length){
        paginas[paginaActual].classList.add("activa");
    }
}