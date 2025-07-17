import { useEffect, useRef } from "react";
import { Box, Container } from "@mui/material";
import { Toaster } from "react-hot-toast";

import { ModalProducto, InventorySummary, ProductViewTabs } from "./components";
import { Header } from "./components/Header";


import { useProductStore, } from "./hooks";
import { Loading } from "./components/Loading";


export const InventoryApp = () => {

  const { starSetProducts } = useProductStore();
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    starSetProducts();
  }, [])

  return (
    <Box sx={{ minHeight: '100vh' }}>

      {/* //Header de la aplicacion */}
      <Header />

      {/* // Contenedor principal de la aplicacion */}

      {
        !didFetch.current ? <Loading /> : (
          <Container sx={{ py: 5 }}>

            <InventorySummary />
            <ProductViewTabs />

          </Container>
        )
      }

      {/* Modal para agregar o editar productos */}
      <ModalProducto />

      {/* Toast notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Box>
  );
}
