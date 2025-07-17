import Box from "@mui/material/Box"
import FormControl  from "@mui/material/FormControl";
import InputLabel  from "@mui/material/InputLabel";
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button  from "@mui/material/Button";


interface SearchCategoryProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    categories: string[];
}

export const SeachCategory = ({ categories, selectedCategory, setSelectedCategory }: SearchCategoryProps) => {
    
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Categoría</InputLabel>

                <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label="Categoría">
                    <MenuItem value="all">Todas las categorías</MenuItem>
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                </Select>
                
            </FormControl>

            {selectedCategory !== "all" && (
                <Button variant="outlined" onClick={() => setSelectedCategory("all")}>
                    Limpiar filtro
                </Button>
            )}
        </Box>
    )
}
