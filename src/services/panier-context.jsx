import { createContext } from 'react'

//items: represente les éléments présents dans le panier
export const PanierContext = createContext({
  items: [],
})
export const PanierContextProvider = ({ children }) => {
  const initialValue = {
    items: [],
  }
  return (
    <PanierContext.Provider value={initialValue}>
      {children}
    </PanierContext.Provider>
  )
}
