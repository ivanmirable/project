import React, { createElement as e, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Product } from './components/Product'
import { products } from './data/products'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Cart from './Cart/Cart'
import MapOfProduct from './components/MapOfProduct'
import { CartContextProvider } from './Context/cart'
function App() {
  // return (
  //  <h1>Hello React!!!</h1>
  // );

  return (
    <CartContextProvider>
      <div className="container mx-auto max-w-2xl pt-5">
        <Header />
        <Router>
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/mapOfProduct" element={<MapOfProduct />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </div>
    </CartContextProvider>
  )

  // return e('div', {className:'container'},[
  //   e('h1',{className:'font-bold',key:1},`Text JSX${count}`),
  //   e('button',{className:'py-2 px-4 border',key: 2,
  //   onClick:()=> setCount(count+1)},'Click me!')])
}

export default App
