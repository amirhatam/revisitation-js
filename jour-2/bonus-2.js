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

//Second soulution with switch
var nextMonth = "January";

switch (nextMonth) {

    case "January":
        console.log("Winter");
        break;

    case "February":
        console.log("Winter");
        break;

    case "March":
        console.log("Spring");
        break;

    case "April":
        console.log("Spring");
        break;

    case "May":
        console.log("Spring");
        break;

    case "June":
        console.log("Summer");
        break;

    case "July":
        console.log("Summer");
        break;

    case "August":
        console.log("Summer");
        break;

    case "September":
        console.log("autumn");
        break;

    case "October":
        console.log("autumn");
        break;

    case "November":
        console.log("autumn");
        break;

    case "December":
        console.log("Winter");

    default:
        console.log("That's not a season...");
}