function numbergenerator() {
    var numbers = [];
    for (var i=0;i<16;i++) {
        var numaleator = Math.floor(Math.random()*99) + 1;
        if (numbers.indexOf(numaleator) === -1) {numbers.push(numaleator);}
        else {i--;}
        document.getElementById(+i).innerHTML = numbers[i];
    }
}
