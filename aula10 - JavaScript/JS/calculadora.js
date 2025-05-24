function calcular(operacao){
    // parseFloat: é uma funçaõ de conversão de texto para números decimais

    //document: pagina em html
    let valor1 = parseFloat(document.getElementById("n1").value)
    let valor2 = parseFloat(document.getElementById("n2").value)

    let resultado;
    if(operacao == 'somar'){
        resultado = valor1 + valor2;
    }else if(operacao == 'subtrair'){
        resultado = valor1 - valor2
    }else if(operacao == 'multiplicar'){
        resultado = valor1 * valor2
    }else if (operacao == 'dividir'){
        resultado = valor1 / valor2
    }else {
        resultado='Operação inválida'
    }

    document.getElementById('resultado').innerText='resultado' + resultado
}