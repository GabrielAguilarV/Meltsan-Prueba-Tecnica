import { onCloseDateModal, onOpenDateModal } from "../store";
import { useAppDispatch, useAppSelector } from "./useReduxStore"

export const useUiStore = () => {

    const dispatch = useAppDispatch();
    const { isOpenModal } = useAppSelector((state) => state.uiModal);

    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }
    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }

    const toggleDateModal = () => {
        isOpenModal ? openDateModal(): closeDateModal();
    }

    return {
        //*Propiedades
        isOpenModal,

        //*Metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
  
}
