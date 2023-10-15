import { useCartContext } from '../Context/cart'

function Cart() {
  const { productsInCart } = useCartContext()
  return (
    <div className="product border py-2 px-4 rounded flex flex-col">
      <div className="container">
        <div className="row display flex"></div>
      </div>
    </div>
  )
}

export default Cart
