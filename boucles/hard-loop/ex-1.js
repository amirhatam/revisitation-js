let numbers = []
let total = 0

for (let i = 0; i < 50; i++) {
    let random = Math.floor(Math.random() * 100)
    total += random
    numbers.push(random)
}

console.log(numbers);
console.log(total);