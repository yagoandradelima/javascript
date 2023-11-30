//Aqui o x pode ser mostrado pelo console.log pois é uma variável global
if (true){
    x = 5; 
}
console.log(x)

//Aqui o x é uma variável local que só poderá ser chamada por um console.log dentro do if
if (True){
    let x = 5
}
console.log(x)

//Aqui é um teste manipulação de tipo entre string e number
console.log(12 - "37") //O sinal de - está gerando subtração enquanto sinal d e+ gera concatenação