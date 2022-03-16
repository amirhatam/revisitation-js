const multiply = n => {
    for (let i = 1; i <= 10; i++)
        console.log(`${n} x  ${i} : ${n * i}`);
}

const addition = n => {
    for (let i = 1; i <= 10; i++)
        console.log(`${n} +  ${i} : ${n + i}`);
}

module.exports = { multiply, addition }