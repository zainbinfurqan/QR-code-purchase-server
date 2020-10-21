const Data = require('../../data.json')
const randomString = require('randomstring')
const bcrypt = require("bcryptjs");

exports.registrationFN = async (req, res, next) => {
    try {
        let payload = req.body;
        console.log(req.body)
        console.log(payload)
        const validate = await validation(req.body)
        console.log(validate)
        if (validate.length) {
            res.status(404).json({ error: validate })
        } else {

            let isUserExsist = Data.users.filter(items => items.email.toUpperCase() == payload.email.toUpperCase());

            if (isUserExsist.length > 0) {
                res.status(401).json({ message: 'User already exsist' })
            }
            else {
                payload['id'] = randomString.generate();

                const salt = bcrypt.genSaltSync(10);

                payload.password = await bcrypt.hash(payload.password, salt);

                Data.users.push(payload)
                console.log(payload)

                res.status(200).json({ ...payload })
            }
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function validation(body) {
    const error = [];
    if (!body.email) {
        error.push("Email is required")
        // error.email = 'Email is required'
    }
    if (!body.fullName) {
        error.push("Name is required")
    }
    if (!body.password) {
        error.push("Password is required")
    }
    if (!body.phoneNo) {
        error.push("PhoneNo is required")
    }
    return error
}