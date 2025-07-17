import { useEffect, useState } from 'react';
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"

import { ProductCategory, ProductStock, ProductsAllView } from '../view';


export const ProductViewTabs = () => {

    const [tab, setTab] = useState(() => {
        const stored = localStorage.getItem("productTab");
        return stored ? parseInt(stored) : 0;
    });

    useEffect(() => {
        localStorage.setItem("productTab", tab.toString());
    }, [tab]);

  

    return (
        <Box sx={{ mt: 6 }}>
            <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
                <Tab label="Todos los productos" />
                <Tab label="Productos por Categoría" />
                <Tab label="Vista de Stock" />
            </Tabs>

            {tab === 0 && (
                <Box mt={3}>
                    <Card>
                        <CardHeader
                            title="Todos los Productos"
                        />
                        <CardContent>
                            <ProductsAllView

                            />
                        </CardContent>
                    </Card>
                </Box>
            )}

            {tab === 1 && (
                <Box mt={3}>
                    <Card>
                        <CardHeader
                            title="Productos Agrupados por Categoría"
                            subheader="Visualiza todos los productos organizados por sus categorías"
                        />
                        <CardContent>
                            <ProductCategory


                            />
                        </CardContent>
                    </Card>
                </Box>
            )}

            {tab === 2 && (
                <Box mt={3}>
                    <Card>
                        <CardHeader
                            title="Buscar Stock de Productos"
                            subheader="Se mostrará el stock de producto o productos según el nombre ingresado o similares si no se encuentra el exacto."
                        />
                        <CardContent>
                            <ProductStock

                            />
                        </CardContent>
                    </Card>
                </Box>
            )}
             
        </Box>
    )
}
