var agora = new Date() //Pega a data do PC
var hora = agora.getHours() //Pega as horas da Data do PC



if (hora < 12) {
    console.log(`Agora são exatamente ${hora} horas. Bom dia!`)
} else if (hora < 18) {
    console.log(`Agora são extamanete ${hora} horas. Boa tarde!`)
} else {
    console.log(`Agora são extamanete ${hora} horas. Boa noite!`)
}

/*
    É bom dar uma analisada na sintaxe da condição else if,
    principalmente por ela não ser uma condição onde hora >=12 && hora < 18
    sendo somente hora < 18.

    Isso é pq a condição anterior já traz essa situação onde a hora >= 12
    já que ela não teve sua condicional cumprida.
*/