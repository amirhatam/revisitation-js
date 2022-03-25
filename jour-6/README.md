# Jour 6

## 01 - Format

- Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
- La fonction doit renvoyer la date au format jj/mm/aaaa
- Appelez la fonction et affichez son résultat dans la console

## 02 - Age

- Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
- La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
- Appelez la fonction et affichez son résultat dans la console

## 03 - Validator

- À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
- La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
  - l'email doit être au bon format
  - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
  - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
- Si tout est bon, elle retourne "All good !", sinon elle retourne "error"

## ⭐ Bonus

- A l'aide du package npm `moment` et en regardant sa [documentation](https://momentjs.com/) sur internet, refaites les exos 1 & 2.
