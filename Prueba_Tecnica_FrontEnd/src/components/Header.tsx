import { Box, Button, Container, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useUiStore } from '../hooks';

export const Header = () => {

    const { openDateModal } = useUiStore();

    const handleOpenModal = () => {
        openDateModal();
    }

    return (
        <Box
            component="header"
            sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1100,
                borderBottom: 1,
                borderColor: 'divider',
                py: 3,
                bgcolor: 'background.paper',
            }}
        >
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                        >
                            Inventary App, Prueba Tecnica
                        </Typography>
                        <Typography
                            color="text.secondary"
                        >
                            Gabriel Edilcer Aguilar Vazquez
                        </Typography>
                    </Box>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenModal()}>
                        Agregar Producto
                    </Button>

                </Box>
            </Container>
        </Box>
    )
}
