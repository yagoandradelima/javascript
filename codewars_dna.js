function DNAStrand(dna){
    let rna = '';
    for (let i = 0; i < dna.length; i++){
        if (dna[i] == 'A'){
            rna += 'T'
        } else if (dna[i] == 'T') {
            rna += 'A'
        } else if (dna[i] == 'C'){
            rna += 'G'
        } else {
            rna += 'C'
        }
    }
    return rna;
}

console.log(DNAStrand("CATG"))