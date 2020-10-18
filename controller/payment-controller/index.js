import { get } from 'mongoose';
import Data from '../../data.json'


export const QRCodePayment = async (req, res) => {
    try {

        let getUserWallet = Data.wallet.filter(item => item.user == req.body.user);
        let userWalletIndex = Data.wallet.findIndex(item => item.user == req.body.user);
        if (getUserWallet.length == 0) {
            res.status(400).json({ message: 'Something goes wrong' })
        } else {

            if (getUserWallet[0].ammount < req.body.payAmount) {
                res.status(400).json({ message: 'You have insificent balance' })
            } else {
                Data[userWalletIndex].ammount - req.body.payAmount;
                let purchaseItem = {
                    user: req.body.user,
                    product: req.body.product,
                    purchaseDate: new Date()
                }
                Data.purchase.push({ ...purchaseItem });
                let transiction = {
                    user: req.body.user,
                    product: req.body.product,
                    paymentType: 'Debt',
                    amount: req.body.payAmount
                }
                Data.trasection.push({ ...transiction });
                res.status(200).json({ message: 'Payment successfully pay' })
            }
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}