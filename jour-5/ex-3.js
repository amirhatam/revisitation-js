const tableUtils = require('./table-utils')

if (process.argv[2]) {
    const n = parseInt(process.argv[2])
    tableUtils.multiply(n)
    tableUtils.addition(n)
} else {
    console.log("error");
}

