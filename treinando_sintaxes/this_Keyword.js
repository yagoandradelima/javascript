//This sozinho sempre aponta pro objeto global
//No node.js o objeto global se chama global
//No console dos navegadores o objeto global é window!


function funcao(){
    //Aqui ele retorna global, mas não necessariamente consegue fazer isso no VSCode
    return this
}

funcao()


//Quando o this está dentro de um escopo de um objeto, ele aponta para o objeto e não para o global
const objeto = {
    'nome': 'Yago',
    'idade': 25,
    'sobrenome': 'Andrade',
    'nomeCompleto': function () {
        return `Meu nome completo é ${this.nome} ${this.sobrenome}`
    }
}
//Sempre que eu aloco uma funcção dentro de um objeto, eu tenho que declarar ele como método
//Tradução, acrescentar () no final
console.log(objeto.nomeCompleto())