var lanche = 'hamburguer'

function meuLanche(n){
    if (n == "batata frita") {
        return n
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


var b = new Boolean(false);

if (b) {
    console.log('Essa condição é verdadeira')
} else {
    console.log('Essa condição é falsa')
}

