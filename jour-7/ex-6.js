const cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]

const soldOut = () => {
    let res = []
    cakes.map(e => {
        if (e.flavor === "chocolate") {
            res.push({
                name: e.name,
                flavor: e.flavor,
                status: 'sold out'
            })
        }
    })
    return res
}

console.log(soldOut());