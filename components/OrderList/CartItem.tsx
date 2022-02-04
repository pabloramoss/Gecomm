import React from 'react';
import { Stack, Button, Text, Image, Icon, Divider, Heading } from '@chakra-ui/react'
import { FaPlus, FaMinus } from 'react-icons/fa';

/* type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
} */


const CartItem = ({item, addToCart, removeFromCart})=> {

  return(
    <Stack>
      <Stack direction="row" alignItems="center">
        <Heading fontSize={15} fontFamily="500">{item.title}</Heading>
        <Image width={55} height={55} src={item.image} alt={item.title} />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize={13}>Precio: $ {item.price}</Text>
        <Text fontSize={13}>Subtotal: $ {(item.amount * item.price).toFixed(2)}</Text>
      </Stack>
        <Stack direction="row" alignItems="center">
          <Button bg="gray.200" size="xs" onClick={()=> removeFromCart(item.id)}><Icon as={FaMinus} /></Button>
          <Text>{item.amount}</Text>
          <Button bg="gray.200" size="xs" onClick={()=> addToCart(item)}><Icon as={FaPlus} /></Button>
        </Stack>
        <Divider />
    </Stack>
  )
}
export default CartItem