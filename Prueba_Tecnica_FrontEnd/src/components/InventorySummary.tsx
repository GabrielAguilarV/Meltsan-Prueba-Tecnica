
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CategoryIcon from '@mui/icons-material/Category';
import { useProductStore } from '../hooks';

export const InventorySummary = () => {

  const { categories,totalStock, totalProducts} = useProductStore();

  return (
    <>
    <Grid container spacing={3}>
          <Grid size={{xs:12, md:3}}>
            <Card>
              <CardHeader title="Total Productos" avatar={<InventoryIcon />} />
              <CardContent>
                <Typography variant="h5">{totalProducts}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{xs:12, md:3}}>
            <Card>
              <CardHeader title="Stock Total" avatar={<AssessmentIcon />} />
              <CardContent>
                <Typography variant="h5">{totalStock}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{xs:12, md:3}}>
            <Card>
              <CardHeader title="Categorías" avatar={<CategoryIcon />} />
              <CardContent>
                <Typography variant="h5">{categories.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
         
        </Grid>
    </>
  )
}
