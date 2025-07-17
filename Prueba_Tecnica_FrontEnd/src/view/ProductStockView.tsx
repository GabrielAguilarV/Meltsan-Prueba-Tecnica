import { useState } from "react"
import {
    Box,
    Button,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material"
import type { ProductLife } from "../interfaces/product-interface"

import { Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import { useProductStore } from "../hooks"


export const ProductStock = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [productSeach, setProductSeach] = useState<ProductLife[]>([])
    const [messageError, setMessage] = useState("")

    const { getProductStock } = useProductStore();


    const handleSumit = async (values: { searchTerm: string }) => {
        setSearchTerm(values.searchTerm);
        try {
            const response = await getProductStock(values.searchTerm);
            if (response?.length === 0) {
                setMessage("No se encontraron productos con el término de búsqueda proporcionado.");
                setProductSeach([]);
                return;
            }
            setProductSeach(response || []);
            setMessage("");
        } catch (error) {
            setProductSeach([]);

            setMessage("No se encontraron productos con el término de búsqueda proporcionado.");
        }
    }

    return (
        <Box display="flex" flexDirection="column" gap={4}>

            <Box display="flex" justifyContent="space-between" flexDirection={{ xs: "column", sm: "row" }} gap={2}>


                <Formik
                    initialValues={{ searchTerm: "" }}
                    validationSchema={Yup.object({
                        searchTerm: Yup.string()
                            .required("El campo de búsqueda es obligatorio")
                            .min(3, "Debe tener al menos 3 caracteres"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {

                        handleSumit(values);
                        setSubmitting(false);

                    }}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <Field
                                as={TextField}
                                name="searchTerm"
                                fullWidth
                                placeholder="Buscar productos..."
                                error={!!errors.searchTerm && touched.searchTerm}
                                helperText={touched.searchTerm && errors.searchTerm}

                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                                sx={{ mt: 2 }}
                            >
                                {isSubmitting ? "Buscando..." : "Buscar"}
                            </Button>
                        </Form>
                    )}
                </Formik>


                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    
                    <Chip label={`${productSeach?.length} producto${productSeach?.length !== 1 ? 's' : ''}`} />
                </Box>

            </Box>


            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Producto</TableCell>

                            <TableCell align="center">Stock</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            productSeach && productSeach.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.nombre}</TableCell>

                                    <TableCell align="center">
                                        <Typography fontWeight={600}>
                                            {product.cantidad}
                                        </Typography>
                                    </TableCell>

                                </TableRow>
                            ))
                        }



                    </TableBody>
                </Table>
            </TableContainer>


            {searchTerm.length === 0 && (
                <Typography align="center" variant="body2" color="text.secondary" sx={{ py: 4 }}>
                    Aqui se mostrarán los productos buscados
                </Typography>
            )}

            {messageError && (
                <Typography align="center" variant="body2" color="error.main" sx={{ py: 4 }}>
                    {messageError}
                </Typography>
            )}
        </Box>
    )
}
