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

//One solution with array function & if
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
/*
calculate(argv[2], argv[3], argv[4])

if (err) {
    console.log(err);
} else if (errOpper) {
    console.log(errOpper);
} else {
    console.log(argv[2], argv[3], argv[4], "=", result);
}
*/

//Seconde solution array function & switch (BEST practises)
const operators = ["+", "-", "*", "/", "%"]

const calculator = (num1, oper, num2) => {
    switch (oper) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "%":
            result = num1 % num2
            break;
        default:
            break;
    }
}

if (process.argv.length == 5) {
    const firstNum = parseInt(process.argv[2])
    const secondNum = parseInt(process.argv[4])
    const operator = process.argv[3]

    if (!operators.includes(operator)) {
        console.log("Error, you must enter valid Operator !");
    } else if (!firstNum || !secondNum) {
        console.log("Error, you must enter number at first and at last !");
    } else {
        calculator(firstNum, operator, secondNum)
        console.log(argv[2], argv[3], argv[4], "=", result);
    }
} else {
    console.log("You must enter tree arguments(Number plus Operator plus Number) !")
}

