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
  