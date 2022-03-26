const longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

const shortNames = longNames.map(e => [{ name: e.firstName + " " + e.lastName }])

console.log(shortNames);