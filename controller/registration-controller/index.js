const Data = require('../../data.json')
const randomString = require('randomstring')
const bcrypt = require("bcryptjs");
exports.registrationFN = async (req, res) => {
    try {
        let payload = req.body;
        let isUserExsist = Data.users.filter(items => items.email.toUpperCase() == payload.email.toUpperCase());

        if (isUserExsist.length > 0) {
            res.status(401).json({ message: 'User already exsist' })
        }
        else {
            payload['id'] = randomString.generate();

            const salt = await bcrypt.genSaltSync(10);

            payload.password = await bcrypt.hash(payload.password, salt);

            Data.users.push(payload)

            res.status(200).json({ ...payload })
        }

    } catch (error) {
        console.log(error)
    }
}