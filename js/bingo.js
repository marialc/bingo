function numbergenerator() {
    var numbers = []; // Creo un array vacío
    
    for (var i=0;i<16;i++) {
        
        var numaleator = Math.floor(Math.random()*99) + 1; 
                
        /* 
        Math.floor redondea el numero resultante de Math.random
        Math.random genera números aleatorios 
        En este caso 99 es hasta donde va a llegar contando y 1 es desde donde empieza a contar 
        */
           
        numbers.push(numaleator); 
        // Push mete los números aleatorios en el array 'numbers'
        document.getElementById(+i).innerHTML = numbers[i]; 
        // Coge los elementos correspondientes al id con el número de 'i' y mete dentro el número aleatorio que tenga el array en ese momento 
        
    }
    
}