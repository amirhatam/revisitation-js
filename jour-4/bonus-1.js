/*
- Créez une fonction `generatePassword` qui reçoit un paramètre `num`.
- La fonction génère un mot de passe aléatoire, avec autant de lettres que 
la valeur de `num`.
- Le mot de passe contiendra uniquement des lettres majuscules.
- Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error".
*/

const lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let randomPass = []

const generatePassword = (num) => {
    if (num >= 6 && num <= 15) {
        for (let i = 0; i < num; i++) {
            let alphNum = lettres.length

            let random = Math.floor(Math.random() * alphNum)

            randomPass.push(lettres[random])
        }
    } else {
        console.log("Error !");
    }
    return randomPass.join("")
}

let result = generatePassword(15)

console.log(result);