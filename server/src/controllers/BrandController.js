const Brand = require("../models/Brand")

class BrandController {
    async addBrand(req,res,next) {
        const newBrand = new Brand({
            brand: req.body.brand,
        })
        try {
            const savedBrand = await newBrand.save()
            return res.status(200).json(savedBrand)
        }catch(err) {
            return res.status(500).json(err)
        }
    }
    async getBrands(req,res,next) {
        try {
            const listOfBrands = await Brand.find({})
            return res.status(200).json(listOfBrands)
        }catch(err) {
            return res.status(500).json(err)
        }
    }
}
module.exports = new BrandController();