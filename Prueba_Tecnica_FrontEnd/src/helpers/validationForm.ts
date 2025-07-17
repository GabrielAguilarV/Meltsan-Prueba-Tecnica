import * as Yup from 'yup';
import { CATEGORIES } from '../constants/categories';


export const productSchema = Yup.object({
  nombre: Yup.string()
    .min(1, "El nombre debe tener al menos 1 carácter")
    .max(100, "El nombre no puede exceder los 100 caracteres")
    .required("El nombre es requerido"),
  categoria: Yup.string()
    .oneOf(CATEGORIES, "Selecciona una categoría válida")
    .required("La categoría es requerida"),

  cantidad: Yup.number()
    .min(1, "La cantidad debe ser mayor o igual a 1")
    .required("La cantidad es requerida"),

  precio: Yup.number()
    .min(0.01, "El precio debe ser mayor que 0")
    .test("decimal-places", "El precio debe tener máximo 2 decimales", (value) =>
      /^\d+(\.\d{1,2})?$/.test(value?.toString() ?? "")
    )
    .required("El precio es requerido"),
});
