function solution(number){
    if (number > 0){
     let acumulador = 0;
      const lista_divisao = []
      for (let contador = 0; contador < number; contador++){
          if (contador % 5 == 0 || contador % 3 == 0){
              lista_divisao.push(contador)
          }
      }
  
      //Esse loop for não entra no for anterior pois eu preciso da lista pronta para rodar o código abaixo
      for (let contador_l = 0; contador_l < lista_divisao.length; contador_l++){
          acumulador += Number.parseInt(lista_divisao[contador_l]);
      }
      //return `Os números que são múltiplos de 3 e 5 abaixo do número que você digitou são [${lista_divisao}]. A soma dos valores desta lista é ${acumulador}.`
      return acumulador
  } else {
      //return console.log(`O número é menor que 0 e seu valor é ${number}`)
      return 0;
    }
  
  }

