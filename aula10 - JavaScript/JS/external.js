function teste(){
    alert('Olá mundo FATEC ZL')
}

    //    Comentário de 1 linha
    /*    Comentário de
          N linhas */
    //    Contextualizando Variáveis:
    //    Definindo uma variável
    let idade = 18

    //    Consulmindo ou consultado a variável
    console.log(idade)
    let novaIdade = idade+1
    console.log(novaIdade)

    //    re-declarando a variável
    idade = 20
    console.log(idade)

    //    Tipagens de Variáveis
    //    Variável do tipo inteiro
    let RA=1111392511038;
    console.log(RA)
    //    Variável do tipo texto
    let nome ="Diana"
    let sobrenome = "Brian"
    let nomeFamilia = "Brito Brian"

    console.log(nome + "" + typeof nome)
    console.log(sobrenome + "" + typeof sobrenome)
    console.log(nomeFamilia)

    //    Variável do tipo número decimal:
    let nota = 10.00
    console.log(nota + "" + typeof nota)

    //    Variável do tipo boolean
    let verdadeiro = true
    let falso= false

    console.log(verdadeiro)
    console.log(falso)

    //    Variável do tipo vazio
    let vazio = null

    //    Variável indefinida (Undefined)
    let indefinido

    function confirmar(){
        let resultado = confirm('Deseja confirmar?')

        alert(resultado)
    }

    function entrada(){
        let nome = prompt("Digite seu nome")

        alert(nome)
    }