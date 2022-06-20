const Category = require("../models/Category")

class CategoryController {
    async addCategory(req,res,next) {
        const newCategory = new Category({
            category: req.body.category,
        })
        try {
            const savedCategory = await newCategory.save()
            return res.status(200).json(savedCategory)
        }catch(err) {
            return res.status(500).json(err)
        }
    }
    async getCategories(req,res,next) {
        try {
            const listOfCategories = await Category.find({})
            return res.status(200).json(listOfCategories)

        }catch(err) {
            return res.status(500).json(err)
        }
    }
}
module.exports = new CategoryController();