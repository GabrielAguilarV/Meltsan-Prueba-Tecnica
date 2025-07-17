import { createSlice } from '@reduxjs/toolkit'


export interface UiState {
    isOpenModal: boolean;
}

const initialState: UiState = {
    isOpenModal: false,
}

export const uiSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        onOpenDateModal: (state) => {
            state.isOpenModal = true;
        },
        onCloseDateModal: (state) => {
            state.isOpenModal = false;
        },
    },
})

export const {onCloseDateModal, onOpenDateModal } = uiSlice.actions

export default uiSlice.reducer