import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

import { useProductStore } from "../hooks";


interface ConfirmDeleteDialogProps {
  open: boolean;
  onClose: () => void;

}

export const ConfirmDeleteDialog = ({ open, onClose }: ConfirmDeleteDialogProps) => {

  const { startDeteleEvent, activeProduct, setActiveProduct } = useProductStore();

  const handleDelete = () => {
    if (activeProduct) {
      startDeteleEvent(activeProduct);
    }
    onClose();

  }

  const handleClose = () => {
    onClose();
    setActiveProduct(null);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>¿Estás seguro?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Esta acción eliminará permanentemente el producto "${activeProduct?.nombre}". ¿Deseas continuar?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button color="error" onClick={() => handleDelete()}>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
