import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Product } from './Product'
import { products } from '../data/products'

function Map() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}
export default Map
