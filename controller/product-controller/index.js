const Data = require('../../data.json')


exports.addProduct = async (req, res) => {
    try {
        console.log(req.body)
        Data.products.push({ ...req.body })
        console.log(Data.products)
        res.status(200).json({ message: "Product add" })

    } catch (error) {
        res.status(400).json({ message: error })
    }
}