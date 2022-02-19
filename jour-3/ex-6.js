/*
- Créez une variable `sentence` valant "Hello Konexio !"
- A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte
 d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH").
*/

const sentence = "Hello Konexio !"
let revSentence = []

for (let i = 0; i < sentence.length; i++) {
    revSentence.unshift(sentence[i])
    // console.log(sentence[i]);
}
console.log(revSentence.join(""));