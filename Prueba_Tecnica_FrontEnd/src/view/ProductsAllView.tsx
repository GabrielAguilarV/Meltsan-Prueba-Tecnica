
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useProductStore } from '../hooks';

export const ProductsAllView = () => {

    const { products } = useProductStore();

    return (
        <Box display="flex" flexDirection="column" gap={4}>

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell >Cantidad</TableCell>
                            <TableCell >Precio</TableCell>
                            <TableCell >Stock</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.nombre}</TableCell>
                                <TableCell>{product.categoria}</TableCell>
                                <TableCell align='left'>${product.precio.toFixed(2)}</TableCell>
                                <TableCell >{product.cantidad}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            {products.length === 0 && (
                <Typography textAlign="center" color="text.secondary" mt={4}>
                    No hay productos disponibles.
                </Typography>
            )}


        </Box>
    )
}
