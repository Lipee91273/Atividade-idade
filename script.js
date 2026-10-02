function classificarIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    if (idade === "" || idade < 0) {
        resultado.textContent = "Digite uma idade válida.";
    } else if (idade <= 12) {
        resultado.textContent = "Classificação: Criança";
    } else if (idade <= 17) {
        resultado.textContent = "Classificação: Adolescente";
    } else if (idade <= 59) {
        resultado.textContent = "Classificação: Adulto";
    } else {
        resultado.textContent = "Classificação: Idoso";
    }
}