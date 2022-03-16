const prompt = require("prompt");

prompt.start()

const mysteryNum = Math.ceil(Math.random() * 100)
console.log(mysteryNum);

const play = (n) => {
    prompt.get(
        {
            name: "numUser",
            description: "Quel est le nombre mystère ?"
        },
        function (err, res) {
            if (res.numUser.search(/^[1-9][0-9]?$|^100$/g) === -1) {
                err = "The value is not a number between 1 and 100";
            }
            if (err) {
                console.log("Error in the input: ", err);

                play();

                return;
            }
            if (res.numUser < mysteryNum) {
                console.log("C'est plus !")
                play();
            } else if (res.numUser > mysteryNum) {
                console.log("C'est moins !")
                play();
            } else {
                console.log("Bravo!!!!")
            }
        }
    )
}

play()