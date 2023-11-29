/*
if (true){
    x = 5; 
}

console.log(x)


console.log(12 - "37") //O sinal de - está gerando subtração enquanto sinal d e+ gera concatenação
*/

var lanche = 'hamburguer'

function meuLanche(n){
    if (nome == "batata frita") {
        return nome
    } else {
        return "Não vendemos esse lanche aqui"
    }
}

//objeto aqui
var cardapio = {
    nome: 'x-burguer', //não esquecer das virgulas
    //getNome é o resultado da função meu Lanche quando o parâmetro é a string 'batata frita'
    getNome: meuLanche('batata frita'),
    //outroLanche é o valor da variável lanche
    outroLanche: lanche
}



