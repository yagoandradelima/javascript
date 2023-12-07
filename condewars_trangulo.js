function isTriangle(a,b,c){
    if (a > 0 && b > 0 && c > 0){
        if (a + b > c && c + a > b && b + c > a){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
    A condição de formação de um triângulo é a de que a soma de dois lados SEMPRE deve ser maior do que o terceiro lado.
*/