class ProductsController {
  static getProducts (req, res) {
    // let products = ModelProducts.getAll()
    let products = ["Apple", "Redmi", "One Plus One"];

    // res.render("products", { products });
    res.json(products);
  }
}

module.exports = ProductsController;