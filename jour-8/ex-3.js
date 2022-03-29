const request = require("request")

//One solution
const userInput = process.argv.slice(2)

request.get("https://pokeapi.co/api/v2/pokemon/" + userInput, (err, res, body) => {
    const result = JSON.parse(body)
    console.log(result);
})

