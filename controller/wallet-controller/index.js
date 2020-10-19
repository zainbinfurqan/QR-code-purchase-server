const Data = require('../../data.json')
const randomString = require('randomstring')


exports.addAmountToWallet = async (req, res) => {
    try {

        let payload = req.body;
        let isWalletFound = Data.wallet.findIndex(item => item.user == payload.user)
        if (isWalletFound != -1) {

            Data.wallet[isWalletFound].totalAmount = Number(Data.wallet[isWalletFound].totalAmount) + Number(payload.amount);

            res.status(200).json({ ...Data.wallet[isWalletFound] })

        } else {

            payload['id'] = randomString.generate();
            let walletIntiety = {
                id: randomString.generate(),
                user: payload.user,
                totalAmount: payload.amount,
                isBlocked: false
            }
            Data.wallet.push(walletIntiety)
            userWallet = Data.wallet.filter(item => item.user == payload.user)

            res.status(200).json({ ...userWallet[0] })

        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.getWalletAmount = async (req, res, next) => {
    try {

    } catch (error) {

    }
}