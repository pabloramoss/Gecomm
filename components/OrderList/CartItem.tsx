import React from 'react';
import { Stack, Button, Text, Image } from '@chakra-ui/react'

/* type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
} */


const CartItem = ({item, addToCart, removeFromCart})=> {

  return(
    <Stack>
      <Text>{item.title}</Text>
      <Text>Precio: $ {item.price}</Text>
      <Text>Subtotal: $ {(item.amount * item.price).toFixed(2)}</Text>
        <Stack direction="row">
          <Button onClick={()=> removeFromCart(item.id)}> - </Button>
          <Text>{item.amount}</Text>
          <Button onClick={()=> addToCart(item)}> + </Button>
          <Image src={item.image} alt={item.title} />
        </Stack>
    </Stack>
  )
}
export default CartItem