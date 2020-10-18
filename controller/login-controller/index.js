const bcrypt = require("bcryptjs");
const Data = require('../../data.json')

exports.loginFN = async (req, res) => {
    try {
        let payload = req.body;

        const validate = validation(req.body)
        if (validate) { res.status(400).json({ ...validate }) } else {


            let isUserExsist = Data.users.filter(items =>
                items.email.toUpperCase() == payload.email.toUpperCase()
            );
            if (isUserExsist) {
                let passwordIsValid = bcrypt.compareSync(payload.password, isUserExsist[0].password);

                if (!passwordIsValid) { res.status(400).json({ message: 'Email or password no correct' }) }

                res.status(200).json({ ...isUserExsist })
            }
            else {
                res.status(400).json({ message: 'Email or password no correct' })
            }
        }


    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function validation(body) {
    const error = {};
    if (!body.email) {
        error.email = 'Email is required'
    }
    if (!body.password) {
        error.password = 'Password is required'
    }

    return error
}