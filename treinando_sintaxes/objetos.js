const objeto_teste = {}

//Criando uma propriedade nova
objeto_teste.propriedade1 = 'Eu sou a propriedade 1 do objeto teste'
//Chamando a propriedade nova
console.log(objeto_teste.propriedade1)

//Criando um metodo novo
objeto_teste.metodo1 = () => 'Eu sou o método 1 do objeto teste'
//Chamando o metodo novo
console.log(objeto_teste.metodo1())

//Criando uma função construtora
function construtora(parametro){
    this.propriedade_costrutora = 'Eu sou a resposta da propriedade dessa função construtora de objetos'
    this.metodo_construtora = function(){
        return parametro + 1
    }
}

//Criando uma variável que receberá uma instância de uma função construtora e por consequência se tornará um objeto
const Objeto_construido = new construtora(2)

//Chamando o método criado dentro da função construtora
console.log(Objeto_construido.metodo_construtora())

//Se eu quiser adicionar uma nova propriedade a esse objeto, eu devo utilizar o nome do Objeto e não da função construtora
Objeto_construido.nova_propriedade = 'Eu sou a nova propriedade do Objeto construido'

//Chamando a nova propriedade
console.log(Objeto_construido.nova_propriedade)