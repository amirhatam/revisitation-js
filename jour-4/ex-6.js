/*
- Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
- Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
- Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`
*/

//Math version
const format = (num) => {
    let heures = Math.floor(num / 3600);
    let restH = num - heures * 3600
    let minutes = Math.floor(restH / 60)
    let secondes = restH - minutes * 60

    console.log(`${heures} : ${minutes} : ${secondes}`);
}

format(3700)

//Version Without Math 

const formatFunc = (num) => {
    let jours = 0
    let heures = 0
    let minutes = 0
    let secondes = 0

    for (let i = 0; i < num; i++) {
        secondes++
        if (secondes === 60) {
            minutes++
            secondes = 0
        }
        if (minutes === 60) {
            heures++
            minutes = 0
        }
        if (heures === 24) {
            jours++
            heures = 0
        }
    }
    console.log(`${jours} :${heures} : ${minutes} : ${secondes}`);
}

formatFunc(3700)