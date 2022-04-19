const request = require("request")

request.get("https://api.chucknorris.io/jokes/random", (err, res, body) => {
    const result = JSON.parse(body)
    console.log(result.value);
})