import React,{createElement as e, useState} from 'react';
import { Product } from './components/Product';
import {products} from './data/products';
import Header from './Header/Header';
import Footer from './Footer/Footer';


function App() {
  // return (
  //  <h1>Hello React!!!</h1>
  // );

   return(
    

    <div className='container mx-auto max-w-2xl pt-5'>
      <Header/>
      {products.map(product => <Product product = {product} key = {product.id}/>)}
      <Footer></Footer>
    </div> 
   )

  // return e('div', {className:'container'},[
  //   e('h1',{className:'font-bold',key:1},`Text JSX${count}`),
  //   e('button',{className:'py-2 px-4 border',key: 2, 
  //   onClick:()=> setCount(count+1)},'Click me!')])

}

export default App;
