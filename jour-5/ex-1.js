/*
- Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers
     et un opérateur `+`, `-`, `x`, `/` ou `%`).
- Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur 
qui retournera le résultat du calcul.
- Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` 
et `4` vous obtenez bien `20`).
- Vous devrez donner les arguments dans le terminal en appelant le programme alors 
attention aux paramètres !
    
    ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" 
    dans la console.
*/


const argv = process.argv
let result = []
let err = ""
let errOpper = ""

const calculate = (num1, oper, num2) => {
    const intNum1 = parseInt(num1) //convert string numbers to Number
    const intNum2 = parseInt(num2)

    //First if for get 3 arguments
    //Sec if for get correct operator
    //Else for math operation 
    if (!num1 || !oper || !num2) {
        return err = "You must enter tree arguments(Number plus Operator plus Number) !"
    } else if (oper !== "+" && oper !== "-" && oper !== "*" && oper !== "/" && oper !== "%") {
        return errOpper = "You must enter valid Operator !"
    }
    else {
        if (oper === "+")
            return result = intNum1 + intNum2
        else if (oper === "-")
            return result = intNum1 - intNum2
        else if (oper === "*")
            return result = intNum1 * intNum2
        else if (oper === "/")
            return result = intNum1 / intNum2
        else if (oper === "%")
            return result = intNum1 % intNum2
    }

}

calculate(argv[2], argv[3], argv[4])

if (err) {
    console.log(err);
} else if (errOpper) {
    console.log(errOpper);
} else {
    console.log(argv[2], argv[3], argv[4], "=", result);
}

