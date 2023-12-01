//Fiz uma function simples literal
function soma (num1, num2){
    const sum = num1 + num2;
    return sum
}

console.log(soma(10, 5))


//Fiz uma arrow function ou uma expressão de função
const subt = (num1, num2) => {
    const sub = num1 - num2; 
    return sub
}

console.log(subt(2, 1))


//Mas eu posso reduzir o código anterior!!
const subtra = (num1, num2) => {
    return num1 - num2; 
}

console.log(subtra(10, 2))


//Mas eu psoso reduzir AINDA mais
const subtracao = (num1, num2) => num1 + num2



//Testando uma função construtora
function Carro(marca){
	this.marcaCarro = marca;
	this.vendido = false;
}

const carro01 = new Carro('Fiat')

console.log(carro01.marcaCarro)