import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Product } from "../interfaces/product-interface";

interface TableRowProductProps {
    product: Product;
    handleEdit: (product: Product) => void;
    handleDelete: (product: Product) => void;

}

export const TableRowProduct = ({ product, handleDelete, handleEdit }: TableRowProductProps) => {

    return (
        <TableRow>
            <TableCell align="left">{product.nombre}</TableCell>
            <TableCell align="right">${product.precio.toFixed(2)}</TableCell>
            <TableCell align="center">{product.cantidad}</TableCell>
            <TableCell align="right">
                <IconButton onClick={() => handleEdit(product)} color="primary">
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => handleDelete(product)} color="error">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}
