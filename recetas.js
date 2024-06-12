// Recupera la información de la receta de localStorage
let receta = JSON.parse(localStorage.getItem('receta'));

// Suponiendo que tienes una variable 'receta' con los datos de la receta
document.getElementById('nombre').textContent = receta.nombre;
document.getElementById('porciones').textContent = 'Porciones: ' + receta.porciones;
document.getElementById('tiempo').textContent = 'Tiempo: ' + receta.tiempo;
document.getElementById('calorias').textContent = 'Calorías: ' + receta.calorias;

// Para los ingredientes, necesitarás crear una lista de ingredientes en tu objeto 'receta'
var listaIngredientes = document.getElementById('ingredientes');
listaIngredientes.innerHTML = ''; // Limpiar la lista de ingredientes existente
receta.ingredientes.forEach(function(ingrediente) {
    var item = document.createElement('li');
    item.textContent = ingrediente;
    listaIngredientes.appendChild(item);
});
// Para la preparación
document.getElementById('preparacion').textContent = receta.preparacion;

// Para la imagen
document.getElementById('imagenReceta').src = receta.imagen;