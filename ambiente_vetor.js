let num = [5,8,2,9,7]
console.log(`Esse são os valores do meu vetor: ${num}`)


/*
    Para acrescentar valores em JS existem duas maneiras.
    A primeira é literalmente declarar a posição da variável
    e depois declarar ela ao lado utilizando um sinal de =.

    Mesmo que não exista essa posição no array (o meu declarado
    vai de 0 a 4), ele vai perceber e vai criar a posição, porém
    eu sempre vou precisar saber qual a última posição a qual eu desejo acrescentar e por isso existe a segunda opção. 

    Abaixo um exemplo da opção 01:
*/
num[5] = 7

/*
    Quando eu quiser adicionar um elemente na última parte do array sem ter que me preocupar em delcarar a [ultima] posição dele como feito no exemplo anterior, eu uso o comando abaixo:
*/

num.push(8) //Nada de tentar um append aqui, hein!?

console.log(`O vetor possui ${num.length} posições`) //Sem parênteses e sim, ele conta os elementos do vetor
//Bizarro, cara. Em JS length é atributo!

num.sort() //Ordena o vetor em ordem crescente

console.log(`Esse são os valores do meu vetor: ${num}`)
//Sempre tomar cuidado com a ordem de execução do JS


//Uma maneira de apresentar o vetor abaixo:
//Antes de ver o resultado, lembra que eu passei .sort()
for (var pos = 0; pos<=num.length; pos++) {
    console.log(`Na posição ${pos} o elemento é ${num[pos]}`)
}

//Simplificando o código acima
//Isso aqui abaixo funciona para objetos e arrays
//SPOILER: Em JS array é um objeto!
for(var pos in num) {
    console.log(num[pos])
}


//.indexOf pesquisa o vetor onde o valor se encontra
//Se eu pesquisar 2, ele vai me retornar 0 (não esquece do sort)
//Se eu pesquisar um valor inexistente no array ele retorna -1
num.indexOf(3)


