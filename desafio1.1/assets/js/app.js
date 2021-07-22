function validacion() {
    if (num1 == num2) {
      // Si no se cumple la condicion...
      alert('[ERROR] numeros deben se distintos');
      return false;
    }

    if (num1 === 0 || num2 ===0){
     alert('[ERROR] numeros deben se distintos a cero');
      return false;
    }
    return true;
}

var num1= prompt("ingrese primer numero");
num1= parseInt(num1);
var num2= prompt("ingrese segundo numero");
num2= parseInt(num2);

if (validacion(num1,num2)){
    alert(`la suma es: ${num1+num2}`)
    alert(`la resta es: ${num1-num2}`)
    alert(`la multiplicacion es: ${num1*num2}`)
    alert(`la division es: ${num1/num2}`)
    alert(`el modulo es: ${num1%num2}`)
}


var num1= prompt("ingrese temperatura en celcius");
num1= parseInt(num1);

alert(`la temperatura en kelvin es: ${num1+273.15}`)
alert(`la temperatura en fahrenheit es: ${(num1*9/5)+32}`)



var diasUsuario = prompt('ingrese total de dias');
diasUsuario = parseFloat(diasUsuario);

var anios = 0, semana = 0, dias = 0;


if (diasUsuario >= 365){
anios = Math.floor(diasUsuario/365)
diasRestantes = diasUsuario - (anios*365)
semana = Math.floor(diasRestantes /7)
dias = diasRestantes - (semana*7);
} else if (diasUsuario >= 7){
semana = Math.floor(diasUsuario /7)
dias = diasUsuario - (semana*7);
} else {dias = diasUsuario} 
alert (`Años: ${anios}, Semanas: ${semana}, Dias: ${dias} `)



