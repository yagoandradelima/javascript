//função simples criada
function funcao(a){
    return a + 2; 
}

//Criei um try para verificar o erro
try {
    //Coloquei um erro proposital onde o 'a' não é declarado e eu chamo ele na função
    // 'a' não declarado = ele não tem valor definido. Só observar o código, ele não recebe nada
    funcao(a)
//Deu erro? O catch vai pegar o erro e guardar na variável 'err' que é o parâmetro do catch
//Eu não preciso declarar o err previamente, posso já colocar ele direto aqui
} catch (err) {
    //Mensagem que eu quero que ocorra. Percebe como fica bem mais bonito que as mensagens de erro comum
    console.error('Erro 002 - Variável \'a\' não foi declarada.')
}
