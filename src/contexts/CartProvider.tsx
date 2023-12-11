import { ReactNode } from "react";

interface ICartProviderProps {
    children: ReactNode
}

export default function CartProvider({ children }: ICartProviderProps) {
  return (
    <div>
        {children}
    </div>
  )
}
