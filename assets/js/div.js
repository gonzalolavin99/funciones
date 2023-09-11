var divBlue = document.getElementById ('divBlue');
var divRed = document.getElementById ('divRed');
var divGreen = document.getElementById ('divGreen');
var divYellow = document.getElementById ('divYellow');

function pintarNegro (elemento){
    elemento.style.backgroundColor = 'black';
}

divBlue.addEventListener ('click', function(){
    pintarNegro(divBlue);
})

divRed.addEventListener ('click', function (){
    pintarNegro(divRed) ;  
})

divGreen.addEventListener ('click', function(){
    pintarNegro(divGreen);
})

divYellow.addEventListener('click', function () {
    pintarNegro(divYellow);  
})