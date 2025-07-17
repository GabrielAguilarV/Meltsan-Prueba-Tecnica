import { useMemo } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { productSchema } from "../helpers/validationForm";
import { useProductStore, useUiStore } from "../hooks";
import { FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import { showErrorToast } from "../helpers/toastMessage";
import { CATEGORIES } from "../constants/categories";

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    outline: 'none',
    maxHeight: '90vh',
    overflowY: 'auto',
};

export const ModalProducto = () => {
    const { activeProduct, starSavingProduct, setActiveProduct, isProductValid } = useProductStore();
    const { closeDateModal, isOpenModal } = useUiStore()


    const initialValues = useMemo(() => activeProduct ? ({
        id: activeProduct.id,
        nombre: activeProduct.nombre,
        categoria: activeProduct.categoria,
        cantidad: activeProduct.cantidad,
        precio: activeProduct.precio,
    }) : {
        id: null,
        nombre: "",
        categoria: "",
        cantidad: 0,
        precio: 0,
    }, [activeProduct]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: productSchema,
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {

            if (!values.id && isProductValid(values.nombre)) {
                showErrorToast(
                    "El producto ya existe. Para editarlo, dirígete a la pestaña \"Productos por categoría\"."
                );
                return;
            }
            if(values === initialValues) {
                showErrorToast("No se han realizado cambios en el producto.");
                return;
            }
            starSavingProduct({
                ...values,
                id: activeProduct?.id,
            });

            resetForm();
            handleCloseModal();
        }
    })

    const handleCloseModal = () => {
        formik.resetForm();
        setActiveProduct(null);
        closeDateModal();

    }


    return (

        <Modal
            open={isOpenModal}
            onClose={handleCloseModal}
        >

            <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
                <DialogTitle>
                    {activeProduct ? "Editar Producto" : "Agregar Nuevo Producto"}
                </DialogTitle>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        fullWidth
                        id="nombre"
                        name="nombre"
                        label="Nombre del producto"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}
                    />
                     <FormControl fullWidth error={formik.touched.categoria && Boolean(formik.errors.categoria)}>
                        <InputLabel id="categoria-label">Categoría</InputLabel>
                        <Select
                            labelId="categoria-label"
                            id="categoria"
                            name="categoria"
                            value={formik.values.categoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Categoría"
                        >
                            {CATEGORIES.map((cat) => (
                                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>
                            {formik.touched.categoria && formik.errors.categoria}
                        </FormHelperText>
                    </FormControl>
                    <TextField
                        fullWidth
                        id="cantidad"
                        name="cantidad"
                        label="Cantidad del producto"
                        type="number"
                        value={formik.values.cantidad}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.cantidad && Boolean(formik.errors.cantidad)}
                        helperText={formik.touched.cantidad && formik.errors.cantidad}
                    />
                    <TextField
                        fullWidth
                        id="precio"
                        name="precio"
                        label="Precio del producto"
                        type="number"
                        value={formik.values.precio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.precio && Boolean(formik.errors.precio)}
                        helperText={formik.touched.precio && formik.errors.precio}
                    />
                </Box>

                <DialogActions>
                    <Button
                        color="secondary"
                        variant="contained"
                        fullWidth
                        onClick={() => handleCloseModal()}
                    >
                        Cancelar
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        {activeProduct ? "Actualizar" : "Agregar"}
                    </Button>
                </DialogActions>
            </Box>


        </Modal>

    )
};