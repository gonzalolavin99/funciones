/*Variable para guardar color*/
var colorOriginal = 'white';
/* Función para  cambiar color del div*/
function  cambiarColor (color){
    var key = document.getElementById ('key');
    key.style.backgroundColor = color;
}

/* Función para crear nuevo div (Tuve que usar chatgpt para  hacer esta función ya que no se me ocurrió otra forma)*/
function crearDiv (color) {
    var nuevoDiv = document.createElement ('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    document.body.appendChild(nuevoDiv);

}



document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorOriginal = 'pink';
        cambiarColor(colorOriginal);
    } else if (event.key === 's') {
        colorOriginal = 'orange';
        cambiarColor(colorOriginal);
    } else if (event.key === 'd') {
        colorOriginal = 'lightblue';
        cambiarColor(colorOriginal);
    } else if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
});