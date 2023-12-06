function descendingOrder(n){
    let texto_n = String(n);
    let maior, meio = 0
    for (let i = 0; i < texto_n.length; i++) {
        if (maior < texto_n[i]){
            maior = texto_n[i];
        }
    }
}

descendingOrder(182392145)