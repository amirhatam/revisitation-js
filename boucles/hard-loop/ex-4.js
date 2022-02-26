/*
Créez un tableau `words` avec les mots suivants
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau 
contenant les lettres de chaque mot.
A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez 
le nombre de "o" de chaque mot.
Retournez le nombre total de "o"
*/

const words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let cont = []
let total = 0

for (let i = 0; i < words.length; i++) {
    cont = words[i].split(" ").join("").split("") // pour effacer les espaces, pas obligatoire

    console.log(cont);
    for (let j = 0; j < cont.length; j++) {
        if (cont[j] === "o") {
            total++
        }
    }
}
console.log("Le nombre total de lettre O :", total);