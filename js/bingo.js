function numbergenerator() {
    var numbers = [];
    for (var i=0;i<16;i++) {
        var numaleator = Math.floor(Math.random()*99) + 1;
        if (numbers.indexOf(numaleator) === -1) {numbers.push(numaleator);}
        else {i--;}
        document.getElementById(+i).innerHTML = numbers[i];
    }
}

// ----- DEFINIR UN COLOR ALEATORIO EN LAS CELDAS COLOREADAS -----

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i=0;i<6;i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    $(".table-primary").css("background-color", getRandomColor());
    }

/* ----- DEFINIR UN COLOR ALEATORIO DE UNA SELECCIÓN DE COLORES -----

// Esta es la mejor opción si quieres seleccionar tu mismx los colores de fondo para que combinen con los colores del resto de los elementos

function colorRandomizer() {
    var colorsArray = ['#5EFC8D','#F9C22E','#53B3CB','#88498F','#7DCFB6','#E15554','#7D5BA6','#E56399','#E9FF70','#FFD670','#61E786'];
    var color;
    
    for(var i=0;i<12;i++) {
       color = colorsArray[Math.floor(Math.random() * 12)];
    }
    return color;
}

function setRandomColor() {
    $(".table-primary").css("background-color", colorRandomizer());
    }
    
----------------------------------------------------------------------- */
