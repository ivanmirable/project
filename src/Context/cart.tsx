import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { IProduct } from '../models'

interface IproductsInCart {
  productsInCart: IProduct[]
  setproductsInCart: Dispatch<SetStateAction<IProduct[]>>
}

const initialValues: IproductsInCart = {
  productsInCart: [],
  setproductsInCart: () => undefined,
}

export const CartContext = createContext(initialValues)

export const CartContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [productsInCart, setproductsInCart] = useState<IProduct[]>([])

  const cartValues = {
    productsInCart,
    setproductsInCart,
  }
  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
