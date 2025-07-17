import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from 'react-redux'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { InventoryApp } from './InventoryApp';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <InventoryApp/>
    </Provider>
  </StrictMode>,
)
