const moment = require('moment')


const formatDate = d => moment(d).format("DD-MM-YYYY")
console.log(formatDate("2020-10-10"));


const calculateAge = d => moment(d).fromNow()
console.log(calculateAge("1986-10-10"));