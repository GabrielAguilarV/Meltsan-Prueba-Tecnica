
import { useDispatch, useSelector } from "react-redux"
import { addProduct, onSetActiveProduct, removeProduct, setProducts, updateProduct, type RootState } from "../store";
import { createProduct, deleteProduct, getProductAndSock, getProducts, updateProductApi, type ProductLike } from "../services/actions";
import type { Product } from "../interfaces/product-interface";
import { showErrorToast, showSuccessToast } from "../helpers/toastMessage";
import axios from "axios";
import { CATEGORIES } from "../constants/categories";
import { useMemo } from "react";

export const useProductStore = () => {

  const dispatch = useDispatch();
  const { products, activeProduct } = useSelector((state: RootState) => state.product);


  const setActiveProduct = (product: Product | null) => {

    dispatch(onSetActiveProduct(product))
  }

  const starSetProducts = async () => {

    try {
      const resp = await getProducts();

      dispatch(setProducts(resp));
    } catch (error) {

      showErrorToast("No se pudo cargar la lista de productos. Por favor, intenta más tarde.");

    }
  }

  const starSavingProduct = async (product: ProductLike) => {
    try {

      if (product.id) {
        const resp = await updateProductApi(product);

        dispatch(updateProduct({ ...resp }));
        showSuccessToast("Producto actualizado correctamente")

      } else {
        const resp = await createProduct(product);
        dispatch(addProduct({ ...resp }))

        showSuccessToast("Producto agregado correctamente");
      }

    } catch (error) {
      showErrorToast("Error al guardar el producto. Por favor, intenta más tarde.");
    }

  }

  const startDeteleEvent = async (product: Product) => {

    const resp = await deleteProduct(product.id);

    if (!resp) {
      showErrorToast("Error al eliminar el producto. Por favor, intenta más tarde.");
      return;
    }

    dispatch(removeProduct(product.id));

    setActiveProduct(null);
    showSuccessToast("Producto eliminado correctamente");
  }


  const getProductStock = async (searchTerm: string) => {

    try {
      const resp = await getProductAndSock(searchTerm);
      return resp;

    } catch (error) {

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          showErrorToast("Producto no encontrado. Por favor, verifica el nombre e intenta nuevamente.");
          return [];
        }

        showErrorToast("Error al buscar el stock del producto. Por favor, intenta más tarde.");
        return [];

      }
    }

  }

  const isProductValid = (nameProducto: string): boolean => {

    return products.some(product => product.nombre === nameProducto);

    ;
  }

  const totalStock = useMemo(() => {
    return products.reduce((sum, p) => sum + p.cantidad, 0);
  }, [products]);

  return {
    // //*Propiedades

    products,
    activeProduct,
    categories: CATEGORIES,
    totalStock,
    totalProducts: products.length,

    // //*Metodos
    starSavingProduct,
    startDeteleEvent,
    starSetProducts,
    setActiveProduct,
    getProductStock,
    isProductValid,
  }


}
