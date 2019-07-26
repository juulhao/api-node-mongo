const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductControllers');
routes.get('/products', ProductController.getAllProducts);
routes.post('/products', ProductController.createProduct);
routes.get('/products/:id', ProductController.getById);
routes.put('/products/:id', ProductController.updateProduct);
routes.delete('/products/:id', ProductController.removeProduct);

module.exports = routes;