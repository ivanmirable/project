import { products } from '../data/products'
import { IProduct } from '../models'
import React, { useState } from 'react'
import './product.css'

interface ProductProps {
  product: IProduct
}
export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const [count, setCount] = useState(() => 0)
  const [price, setPrice] = useState(product.price)
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

  const btnClasses = ['py-2 px-4 border', btnBgClassName]
  return (
    <div className="container border py-2 px-4 rounded flex flex-col items-center mb2">
      <img src={product.image} className=" w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">price: {product.price}</span>
      <button
        className={btnClasses.join('')}
        onClick={() => setDetails((prev) => !prev)}>
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      <div className="controls">
        <div className="counter">
          <div className="float left">
            <button
              className="font-bold  float left justify-content center padding"
              onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
          <div className="border py-2 px-4 rounded">{count}</div>
          <div className="float right">
            <button
              className="font-bold float right"
              onClick={() => {
                if (count <= 0) {
                  return count
                }
                setCount(count - 1)
              }}>
              -
            </button>
          </div>
        </div>
        <div className="acces-button">
          <button className="buttonObj border py-2 px-4 rounded flex flex-col items-center mb2">
            В Корзину
          </button>
        </div>
      </div>

      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  )
}
