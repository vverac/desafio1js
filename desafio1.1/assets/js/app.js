
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
//se pide ingresar por el navegador dos variables
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

//se pide ingresar una variable por el navegador
var num1= prompt("ingrese temperatura en celcius");
num1= parseInt(num1);

alert(`la temperatura en kelvin es: ${num1+273.15}`)
alert(`la temperatura en fahrenheit es: ${(num1*9/5)+32}`)


//se pide ingresar una variable por el navegador
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


//se pide ingresar cinco variable por el navegador
var num_1= prompt("ingrese primer numero");
num_1= parseInt(num_1);
var num_2= prompt("ingrese segundo numero");
num_2= parseInt(num_2);
var num_3= prompt("ingrese tercer numero");
num_3= parseInt(num_3);
var num_4= prompt("ingrese cuarto numero");
num_4= parseInt(num_4);
var num_5= prompt("ingrese quinto numero");
num_5= parseInt(num_5);

alert(`la suma de todos es: ${num_1+num_2+num_3+num_4+num_5}`)
alert(`el promedio es: ${(num_1+num_2+num_3+num_4+num_5)/5}`)



