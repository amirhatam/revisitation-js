//my Solution (BEST Practices)
const formatDate = d => `0${new Date(d).getDate()}-0${new Date(d).getMonth()}-${new Date(d).getFullYear()}`

console.log(formatDate("2022-03-02"));

// PROF Solution :|
function formatDateProf(dateString) {

    var date = new Date(dateString);

    // console.log("hi".padStart(5, "*"));

    var jj = date.getDate().toString().padStart(2, "0");
    var mm = (date.getMonth() + 1).toString().padStart(2, "0");

    console.log("Result:", `${jj}/${mm}/${date.getFullYear()}`)

}

formatDateProf("2020-11-15")