const { Router } = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const { getAllProducts,
         createProduct,
        getSingleProduct,
         updateProduct,
         deleteProduct } = require("../controller/products.controller");


const ProductRouter = Router();
// get all produdcts and Create products router

ProductRouter.route("/").get(verifyToken, getAllProducts).post(createProduct);
// get single products
ProductRouter
.route("/:productId")
.get(getSingleProduct)
.patch(updateProduct)
.delete(deleteProduct);

module.exports = ProductRouter;