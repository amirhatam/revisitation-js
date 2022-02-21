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

    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700)