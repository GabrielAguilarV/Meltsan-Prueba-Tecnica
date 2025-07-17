import { Box} from '@mui/material';
import { TableGridProducts, SeachCategory } from '../components';
import { useProductStore, useFilterCategory } from "../hooks";
import { ConfirmDeleteDialog } from '../components/ConfirmDeleteDialog';
import { useState } from 'react';


export const ProductCategory = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const { products, categories } = useProductStore();

    const {
  
        selectedCategory,
        setSelectedCategory,
        filterCategoryData

    } = useFilterCategory(products);


    return (
        <Box display="flex" flexDirection="column" gap={4}>

            <SeachCategory
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            {
                filterCategoryData.map(({ categoria, categoryProducts }) => (
                    <TableGridProducts
                        key={categoria}
                        categoria={categoria}
                        categoryProducts={categoryProducts}
                        setDialogOpen={setDialogOpen}
                    />
                ))
            }


            <ConfirmDeleteDialog
                open={dialogOpen}
                onClose={() => {
                    setDialogOpen(false)

                }
                }
            />
        </Box>
    );
};
