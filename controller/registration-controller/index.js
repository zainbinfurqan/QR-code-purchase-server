const Data = require('../../data.json')
const randomString = require('randomstring')
const bcrypt = require("bcryptjs");

exports.registrationFN = async (req, res, next) => {
    try {
        let payload = req.body;

        const validate = await validation(req.body)
        // console.log(validate)
        if (validate.length) {
            // throw validate
            // throw new Error({ ...validate })
            // next()
            res.status(404).json({ ...validate })
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

                res.status(200).json({ ...payload })
            }
        }

    } catch (error) {
        // console.log(error)
        // next(error)
        // next({ message: error });
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