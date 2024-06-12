window.onscroll = function() {
    var botonInicio = document.getElementById("arriba");
    if (window.pageYOffset > 100) {
        botonInicio.style.display = "block";
    } else {
        botonInicio.style.display = "none";
    }
};