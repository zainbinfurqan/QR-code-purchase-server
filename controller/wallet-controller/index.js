const Data = require('../../data.json')
const randomString = require('randomstring')


exports.addAmountToWallet = async (req, res) => {
    try {

        let payload = req.body;
        let isWalletFound = Data.wallet.findIndex(item => item.user == req.user)

        if (isWalletFound != -1) {

            Data[isWalletFound].amount = payload.addAmount;

            res.status(200).json({ ...Data[isWalletFound] })

        } else {

            payload['id'] = randomString.generate();

            Data.wallet.push(...payload)

            userWallet = Data.wallet.filter(item => item.user == req.user)

            res.status(200).json({ ...userWallet[0] })

        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}