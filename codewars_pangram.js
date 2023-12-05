function isPangram(string){
    let no_spaces = string.replace(/\s/g, "")
    let no_points = no_spaces.replace(/,/g, "")
    const lista = []
    let comparador = 0
    while(comparador <= no_points.length){
        if(lista.indexOf(no_points[comparador]) > -1){
            comparador++
        } else {
            lista.push(no_points[comparador])
            comparador++
        }
    }

    if (lista.length == 27) {
        return true;
    } else {
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))


