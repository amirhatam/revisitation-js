//my Solution (BEST Practices)
const formatDate = (d) => ["0" + new Date(d).getDate(), "0" + new Date(d).getMonth(), "" + new Date(d).getFullYear()]

console.log(formatDate("2022-03-02"));