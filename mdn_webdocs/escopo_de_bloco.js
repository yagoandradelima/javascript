var x = 5
//Tudo dentro de um par de {} é um bloco
{
    var x = 7
}

console.log(x) //Vai exibir 7

/*
    Essa exibição de x = 7 ocorre, pois mesmo dentro de um bloco,
    var x = 7 sobrescreve o var x = 7, pois a sintaxe do var declara
    uma variável global
*/