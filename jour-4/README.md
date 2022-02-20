## 01 - Object

- Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
- Affichez `cat` dans la console
- Affichez la valeur de `age` dans la console
- À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`.

## 02 - Combine

- Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
- Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
- Affichez la valeur de `age` de `cat` (il y a deux façons de le faire) dans la console.
- Affichez la valeur de `isCute` de `cat2` (il y a deux façons de le faire) dans la console.

## 03 - Even

- Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
- Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
- Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats.

## 04 - Compare

- Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
- Dans la fonction, à l'aide d'une condition, affichez selon les cas :
  - "`num1` is bigger" si `num1` est plus grand
  - "`num2` is bigger" si `num2` est plus grand
  - "both are the same" si ils sont égaux
- Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats.

## 05 - Add Up

- Créez une fonction `addUp` qui reçoit un paramètre `num`
- À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
- Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78.

## 06 - Time

- Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
- Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
- Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`.

## ⭐ Bonus

- Créez une fonction `generatePassword` qui reçoit un paramètre `num`
- La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
- Le mot de passe contiendra uniquement des lettres majuscules
- Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error".

## ⭐⭐ Bonus II

- Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
- La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
- Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
- Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score).
