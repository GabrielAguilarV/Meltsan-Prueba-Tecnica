
import axios from 'axios';
import { productApi } from '../api/productApi';
import type { Product, ProductLife } from '../interfaces/product-interface';




export const getProducts = async (): Promise<Product[]> => {
	try {
		const { data } = await productApi.get<Product[]>(``);
		return data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
}

export const getProductAndSock = async (searchTerm: String): Promise<ProductLife[]> => {
	try {
		const { data } = await productApi.get<ProductLife[]>(`/stock/${searchTerm}`);



		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Error fetching product stock:', error.response?.data || error.message);
		}
		throw error;
	}
}

export const getProductById = async (id: number): Promise<Product> => {
	try {
		const { data } = await productApi.get<Product>(`/products/${id}`);
		return data;
	} catch (error) {
		console.error('Error fetching product by ID:', error);
		throw error;
	}
}

export interface ProductLike {
	id?: number;
	nombre: string;
	categoria: string;
	cantidad: number;
	precio: number;
}

export const createProduct = async (product: ProductLike) => {

	const { data } = await productApi.post(``, product);
	return data;

}

export const updateProductApi = async (product: ProductLike) => {

	const { data } = await productApi.put(`/${product.id}`, product);
	return data;

}

export const deleteProduct = async (id: number) => {
	try {
		const response = await productApi.delete(`/${id}`);
		return response.status === 204 || response.status === 200;
	} catch (error) {
		console.error("Error al eliminar producto:", error);
		return false;
	}
}
