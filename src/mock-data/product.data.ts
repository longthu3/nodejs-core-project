import {Product} from "../model/product.model";

const listProduct: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description for Product 1',
        image: 'https://via.placeholder.com/150',
        category: 'Category 1',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Description for Product 2',
        image: 'https://via.placeholder.com/150',
        category: 'Category 2',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'Description for Product 3',
        image: 'https://via.placeholder.com/150',
        category: 'Category 3',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

export default listProduct;