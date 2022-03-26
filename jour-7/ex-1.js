const fs = require('fs')

fs.readFile("jour-7/jour07.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Text file : " + data.toString());
});
