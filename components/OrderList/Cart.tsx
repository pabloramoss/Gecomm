import React from 'react';
import CartItem from './CartItem';
const Cart = ({cartItems, addToCart, removeFromCart})=> {

  return(
    <>
    {cartItems.map(item => (
      <CartItem 
      key={item.id}
      item={item}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      />
      ))}
    </>
  )
}
export default Cart