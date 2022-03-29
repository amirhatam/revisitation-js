const request = require("request")

request.get("https://restcountries.com/v2/all", (err, res, body) => {
    const result = JSON.parse(body)
    let countries = result.map(e => {
        return e.name
    })
    console.log(countries.join(" - "));
})