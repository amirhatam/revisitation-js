const request = require("request")

//One solution
const userInput = process.argv.slice(2)

request.get("https://pokeapi.co/api/v2/pokemon/" + userInput, function (err, res, body) {
    const result = JSON.parse(body)
    console.log("name : ", result.name);
})


//Another solution
const findPokemon = (p) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${p}`

    request.get(url, (err, res, body) => {
        const result = JSON.parse(body)
        console.log("name : ", result.name);
    })
}

findPokemon(25)