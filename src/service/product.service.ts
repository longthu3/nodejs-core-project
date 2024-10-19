import listProduct from "../mock-data/product.data";
import {Product} from "../model/product.model";

/**
 * Get all products
 */
export const getAllProducts = () => {
    return listProduct;
}

/**
 * Get product by id
 *
 * @param id value of product id
 */
export const getProduct = (id: number) => {
    return listProduct.find(product => product.id === id);
}

/**
 * Add new product
 *
 * @param product value of product
 */
export const addProduct = (product: Product) => {
    product.id = UUID();
    product.createdAt = new Date();
    product.updatedAt = new Date();
    listProduct.push(product);
    return product;
}

/**
 * Update product by id
 *
 * @param id      value of product id
 * @param product value of product
 */
export const updateProduct = (id: number, product: Product) => {

    //find index of product in listProduct
    const index = listProduct.findIndex(product => product.id === id);
    if (index === -1) {
        return null;
    }
    product.id = id;
    product.updatedAt = new Date();

    //clone product and update it
    listProduct[index] = {...listProduct[index], ...product};
    return product;
}

/**
 * Delete product by id
 *
 * @param id value of product id
 */
export const deleteProduct = (id: number) => {
    const index = listProduct.findIndex(product => product.id === id);
    if (index === -1) {
        return null;
    }
    const product = listProduct[index];

    //delete product from listProduct
    listProduct.splice(index, 1);
    return product;
}

/**
 * Generate UUID
 */
const UUID = () => {
    return Math.floor(Math.random() * 1000000);
}