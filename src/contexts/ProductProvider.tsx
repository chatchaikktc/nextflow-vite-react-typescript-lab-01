import React, { ReactNode, createContext } from 'react'

interface ProductProviderProps {
    children: ReactNode;
}
  

export default function ProductProvider({ children }: ProductProviderProps) {

  return (
    <div>ProductProvider</div>
  )
}
