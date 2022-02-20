/*
- Créez un tableau avec le nom de chacun de vos camarades de promo
- Affichez aléatoirement le nom de la personne tiré au sort
*/

const students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim", "Moncef"];
const studentsNum = students.length


const random = Math.ceil(Math.random() * studentsNum)
const result = random - 1
console.log(random, students[result]);

