import { Request, Response, NextFunction } from 'express';
import {ApiResponse} from "../model/dto/response.dto";

/**
 * Validate product data before adding
 *
 * @param req  request of user
 * @param res  response of server
 * @param next next function to accept request data
 */
export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    const product = req.body;
    if (!isValidProduct(product)) {
        const response: ApiResponse<null> = {
            status: 400,
            message: 'Invalid product data, must have name, price, description, image and category fields.',
            data: null
        }
        res.send(response);
        return;
    }
    next();
}

/**
 * Check if product data is valid
 *
 * @param product value of product
 */
const isValidProduct = (product: any) => {
    return !(
        !product.name
        || !product.price
        || !product.description
        || !product.image
        || !product.category
    );
}