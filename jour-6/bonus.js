const moment = require('moment')

const formatDate = d => moment(d).format("DD-MM-YYYY")

console.log(formatDate("2020-10-10"));