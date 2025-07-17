import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import type { Product } from '../interfaces/product-interface';
import { TableRowProduct } from './TableRowProduct';
import { useProductStore, useUiStore } from "../hooks";

interface TableGridProductsProps {
    categoria: string
    categoryProducts: Product[];
    setDialogOpen: (open: boolean) => void;

}
export const TableGridProducts = ({ categoria, categoryProducts, setDialogOpen }: TableGridProductsProps) => {

    const { setActiveProduct } = useProductStore();
    const { openDateModal } = useUiStore();

    const handleEdit = (product: Product) => {
        setActiveProduct(product)
        openDateModal();
    }
    const handleDelete = (product: Product) => {
        setActiveProduct(product);
        setDialogOpen(true);

    }

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">{categoria}</Typography>
                <Chip label={`${categoryProducts.length} producto${categoryProducts.length !== 1 ? 's' : ''}`} />
            </Box>

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"><strong>Nombre</strong></TableCell>
                            <TableCell align="right"><strong>Precio</strong></TableCell>
                            <TableCell align="center"><strong>Stock</strong></TableCell>
                            <TableCell align="right"><strong>Acciones</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {categoryProducts.map((product) => (
                            <TableRowProduct
                                key={product.id}
                                product={product}
                                handleEdit={handleEdit}
                                handleDelete={() => handleDelete(product)}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    )
}
