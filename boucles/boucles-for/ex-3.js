/* 
Lancez un dé 20 fois et affichez la somme de tout les résultats plus 
grand ou égale à 5
*/
let result = 0
for (let i = 0; i <= 19; i++) {
    let random = Math.ceil(Math.random() * 6)
    if (random >= 5) {
        result += random
    }
}
console.log(result);