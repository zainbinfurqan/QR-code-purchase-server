const Data = require('../../data.json')
const randomString = require('randomstring')


exports.addAmountToWallet = async (req, res) => {
    try {

        let payload = req.body;
        let isWalletFound = Data.wallet.findIndex(item => item.user == req.headers.authorization)
        if (isWalletFound != -1) {

            Data.wallet[isWalletFound].totalAmount = Number(Data.wallet[isWalletFound].totalAmount) + Number(payload.amount);
            res.status(200).json({ ...Data.wallet[isWalletFound] })

        } else {

            payload['id'] = randomString.generate();
            let walletIntiety = {
                id: randomString.generate(),
                user: req.headers.authorization,
                totalAmount: Number(payload.amount),
                isBlocked: false
            }
            Data.wallet.push(walletIntiety)
            userWallet = Data.wallet.filter(item => item.user == req.headers.authorization)
            res.status(200).json({ ...userWallet[0] })

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getWalletAmount = async (req, res, next) => {
    try {

        let wallet = Data.wallet.filter(item => item.user == req.headers.authorization);
        if (wallet.length > 0) {
            res.status(200).json({ ...wallet[0] })
        } else {
            res.status(500).json({ message: 'Insuficent balance' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}