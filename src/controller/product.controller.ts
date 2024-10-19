import {Request, Response} from "express";
import * as productService from "../service/product.service"
import {ApiResponse} from "../model/dto/response.dto";
import {Product} from "../model/product.model";

export const getAllProducts = (req: Request, res: Response) => {
    const data = productService.getAllProducts();
    const response: ApiResponse<Product[]> = {
        status: 200,
        message: 'Get all products success',
        data: data
    }
    res.send(response);
}

export const getProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = productService.getProduct(id);
    if (data) {
        const response: ApiResponse<Product> = {
            status: 200,
            message: 'Get product success',
            data: data
        }
        res.send(response);
        return;
    }
    const notfoundResponse: ApiResponse<null> = {
        status: 404,
        message: 'Product not found',
        data: null
    }
    res.send(notfoundResponse);
}

export const addProduct = (req: Request, res: Response) => {
    const product: Product = req.body;
    const data = productService.addProduct(product);
    const response: ApiResponse<Product> = {
        status: 201,
        message: 'Add product success',
        data: data
    }
    res.send(response);
}

export const updateProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product: Product = req.body;
    const data = productService.updateProduct(id, product);
    if (data) {
        const response: ApiResponse<Product> = {
            status: 200,
            message: 'Update product success',
            data: data
        }
        res.send(response);
        return;
    }
    const notfoundResponse: ApiResponse<null> = {
        status: 404,
        message: 'Product not found',
        data: null
    }
    res.send(notfoundResponse);
}

export const deleteProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = productService.deleteProduct(id);
    if (data) {
        const response: ApiResponse<Product> = {
            status: 200,
            message: 'Delete product success',
            data: data
        }
        res.send(response);
        return;
    }
    const notfoundResponse: ApiResponse<null> = {
        status: 404,
        message: 'Product not found',
        data: null
    }
    res.send(notfoundResponse);
}