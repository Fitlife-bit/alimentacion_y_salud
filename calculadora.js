function calcularPesoIdeal() {
    var altura = document.getElementById('altura').value;
    var sexo = document.getElementById('sexo').value;
    var pesoIdeal;

    if(sexo == 'masculino') {
        pesoIdeal = 0.75 * altura - 62.5;
    } else {
        pesoIdeal = 0.75 * altura - 57.5;
    }

    document.getElementById('resultado').innerHTML = 'Tu peso optimo es de: ' + pesoIdeal.toFixed(2) + ' kg.';
}