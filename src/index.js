import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import { PanierContextProvider } from './services/panier-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PanierContextProvider>
      <App />
    </PanierContextProvider>
  </React.StrictMode>
)
