import {Router} from "express";
import * as productController from "../controller/product.controller"
import {validateProduct} from "../middleware/product.middleware";

const productRoutes = Router();

// Define routes of product
productRoutes.get('/', productController.getAllProducts);
productRoutes.get('/:id', productController.getProduct);
productRoutes.post('/',validateProduct, productController.addProduct);
productRoutes.put('/:id', productController.updateProduct);
productRoutes.delete('/:id', productController.deleteProduct);

export default productRoutes;
