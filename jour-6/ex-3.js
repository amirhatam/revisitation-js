const prompt = require('prompt')

const schema = {
    properties: {
        email: { pattern: /^\S+@\S+\.\S+$/, required: true, message: "Email non valide" },
        username: { pattern: /^[a-zA-Z-]+$/, required: true, message: "Username non valide" },
        password: {
            required: true, message: "Password non valide", conform: function (value) {
                if (value.search(/.{6,}/) === -1) {
                    return false;
                }

                if (value.search(/[a-zA-Z]/) === -1) {
                    return false;
                }

                if (value.search(/[0-9]/) === -1) {
                    return false;
                }

                if (value.search(/[^a-zA-Z0-9-]/) > -1) {
                    return false;
                }

                return true;
            }
        }
    },
};
const checkProfile = () => {
    prompt.get(schema, (err, res) => {
        if (err) {
            console.error(err);
        }
        console.log(res);
    })
}
prompt.start();

checkProfile()