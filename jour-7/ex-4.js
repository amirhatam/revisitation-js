const arr = [1, "toto", 34, "javascript", 8]

const numbers = arr.filter(e => typeof e === "number")
console.log(numbers);