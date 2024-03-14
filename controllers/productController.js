const Product = require('../models/productModel');

const products = [
    new Product("Serena Diamond Ring", "Elegante anillo con diamantes incrustados.", "images/im1.jpg"),
    new Product("Eleanor Necklace", "Collar de Diamantes Swarovski.", "images/im2.jpg"),
    new Product("Serena Earrings", "Pendientes elegantes de oro puro.", "images/im3.jpg")
];

exports.getProductList = (req, res) => {
    res.render('products', { products: products });
};
