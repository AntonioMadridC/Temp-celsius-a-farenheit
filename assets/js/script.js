//FUNCIONES PARA C a F y F a C
function CtoF(n) {
    return(n*9/5+32)
}

function FtoC(n) {
    return((n-32)*5/9)
}

//Obtener todos los elementos temperatura
var elements = document.getElementsByClassName("temp");
console.log(elements);
console.log(elements[0].textContent);
console.log(CtoF(parseFloat(elements[0].textContent)));
/* for (var i = 0, len = elements.length; i < len; i++) {
    // elements[i].style ...
} */

//C a F
function tempF() {
    for (var i = 0, len = elements.length; i < len; i++) {
        let temp = CtoF(parseFloat(elements[i].textContent))
        elements[i].innerHTML = `${temp}°F`
    }
}

//F a C
function tempC() {
    for (var i = 0, len = elements.length; i < len; i++) {
        let temp = parseInt(FtoC(parseFloat(elements[i].textContent)))
        elements[i].innerHTML = `${temp}°C`
    }
}

/* var celsius = true
function interruptor() {
    if (celsius){
        celsius = false
        tempF
    }
    else {
        celsius = true
        tempC
    }
} */

const mySwitch = document.querySelector('#switchTemp');

mySwitch.addEventListener('change', function() {
  if (this.checked) {
    tempF();
  } else {
    tempC();
  }
});
