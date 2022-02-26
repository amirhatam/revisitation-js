/*
Créez deux variables `ussainBolt` et `tysonGay` valant 0.

Tant que l'une des deux variables n'a pas dépassé 100.

Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre 
à la premiere variable et le deuxieme à la deuxieme.

Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier).
*/

let ussainBolt = 0
let tysonGay = 0

let arr = []
let num = 0
while (num < 2) {
    let random = Math.ceil(Math.random() * 10)
    arr.push(random)
    console.log(random);
    ussainBolt = arr[0]
    tysonGay = arr[1]
    num++
}
console.log("ussainBolt", ussainBolt);
console.log("tysonGay", tysonGay);