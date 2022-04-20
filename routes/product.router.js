const { Router } = require("express");
const { getAllProducts,
         createProduct,
        getSingleProduct,
         updateProduct,
         deleteProduct } = require("../controller/products.controller");

const ProductRouter = Router();

ProductRouter.route("/").get(getAllProducts).post(createProduct);
ProductRouter
.route("/:productId")
.get(getSingleProduct)
.patch(updateProduct)
.delete(deleteProduct);

module.exports = ProductRouter;