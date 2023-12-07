var isSquare = function(n){
    if (Math.sqrt(n) % 2 == 1 || Math.sqrt(n) % 2 == 0){
      return true;
    } else {
      return false;
    }
  }

  //Para essa solução eu utilizei o método .sqrt() de Math
  //Ele retorna aproximadamente o valor da raiz quadrada
  //