const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    async getAllProducts(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products);
    },

    async createProduct(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async getById(req, res) {
        const productId = await Product.findById(req.params.id);
        return res.json(productId);
    },

    async updateProduct(req, res) {
        const productId = await Product.findByIdAndUpdate(req.params.id , req.body, {
            new: true
        });
        return res.json(productId);
    },

    async removeProduct(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        res.send('Produto removido com sucesso');
    }
}