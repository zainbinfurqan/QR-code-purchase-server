const Data = require('../../data.json')


exports.getTransictions = async (req, res) => {
    try {

        let payload = req.body;
        let userTransictions = Data.trasection.filter(item => item.user == payload.user);
        res.status(200).json(userTransictions)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.addTransiction = async (req, res) => {
    try {

        let payload = req.body;

        // let userTransictions = Data.trasection.filter(item => item.user == payload.user);
        // res.status(200).json(userTransictions)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}