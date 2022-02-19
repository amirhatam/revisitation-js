/*
- Créez une variable `month` de valeur `"January"`.
- À l'aide d'un switch, affichez "Winter", "Spring", 
"Summer" ou "Fall" selon la valeur du mois.
- Changez la valeur de `month` pour changer le résultat.
*/

//First soulution with methode includes()

const month = "January"

const spring = ["March", "April", "May"]
const summer = ["June", "July", "August"]
const fall = ["September", "October", "November"]
const winter = ["December", "January", "February"]

if (spring.includes(month)) {
    console.log("Spring");
} else if (summer.includes(month)) {
    console.log("Summer");
} else if (fall.includes(month)) {
    console.log("Fall");
} else {
    console.log("Winter");
}
