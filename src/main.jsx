import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyled from './Styles/globalStyles'
import { ModalStyled } from './Containers/Artists/styles'

import { Routes } from './routes'
import { RouterProvider } from 'react-router-dom'

ModalStyled.setAppElement("#root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={Routes} />
    <GlobalStyled />

  </StrictMode>,
)
