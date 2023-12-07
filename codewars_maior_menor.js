function highAndLow(numbers){
    let arr = numbers.split(' ');
    let maior = menor = arr[0];
    for (let c = 0; c < arr.length; c++){
        let tipagem;
        //Transformei a comparação para Number pois em String -1 fica menor que -8 na comparação
        if (maior < Number(arr[c])) {
            maior = arr[c];
        }
        //Transformei a comparação para Number pois em String -1 fica menor que -8 na comparação
        if (menor > Number(arr[c])) {
            menor = arr[c];
        }
    }
    return `${maior} ${menor}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


//Math.max e Math.min resolveriam isso em duas linhas