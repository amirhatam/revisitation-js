//One solution
const multiply = n => {
    let num = []
    for (let i = 1; i <= 10; i++) {
        num.push(`${n} x  ${i} : ${n * i}`)
    }
    return num
}

console.log(multiply(5));
