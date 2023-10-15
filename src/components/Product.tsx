import { IProduct } from '../models'
import { useMemo, useState } from 'react'

import './product.css'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const [count, setCount] = useState(0)

  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  const totalPriceEl = useMemo(
    () => product.price * count,
    [count, product.price],
  ) // происходит рендеринг, только при изменении count и product.price

  const test = () => {
    if (count <= 0) {
      return count
    }
    setCount((prev) => prev - 1)
  }

  return (
    <div className="container border py-2 px-4 rounded flex flex-col items-center mb2">
      <img src={product.image} className=" w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">price: {totalPriceEl}</span>
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
              onClick={() => setCount((prev) => prev + 1)}>
              +
            </button>
          </div>
          <div className="border py-2 px-4 rounded">{count}</div>
          <div className="float right">
            <button className="font-bold float right" onClick={test}>
              -
            </button>
          </div>
        </div>
        <div className="acces-button">
          <nav>
            <button className="buttonObj border py-2 px-4 rounded flex flex-col items-center mb2">
              <a href="/cart"> В Корзину</a>
            </button>
          </nav>
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
