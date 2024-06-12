var buscador = document.getElementById('buscador');

buscador.addEventListener('input', function() {
    var valorBuscador = this.value.toLowerCase();

    var recetas = document.getElementsByClassName('contenido');

    for (var i = 0; i < recetas.length; i++) {
        var receta = recetas [i];

        var nombreReceta = receta.getAttribute('data-nombre').toLowerCase();

        if (nombreReceta.includes(valorBuscador)){
            receta.style.display = '';
        } else {
            receta.style.display = 'none';
        }
    }
});