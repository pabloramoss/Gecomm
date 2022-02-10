import React from 'react';
import { Stack, Button, Text, Image, Icon, Divider, Heading, HStack, VStack } from '@chakra-ui/react'
import { FaPlus, FaMinus } from 'react-icons/fa';

/* type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
} */


const CartItem = ({item, handleAddToCart, handleRemoveFromCart})=> {

  return(
    <Stack>
      <Stack direction="row" alignItems="center">
        <HStack w="100%">
          <Stack>
            <Image objectFit="scale-down" width={100} height={100} src={item.image} alt={item.title} />
            <Stack direction="row" alignItems="center">
              <Button bg="gray.200" size="xs" onClick={()=> handleRemoveFromCart(item.title)}><Icon as={FaMinus} /></Button>
                <Text>{item.amount}</Text>
              <Button bg="gray.200" size="xs" onClick={()=> handleAddToCart(item)}><Icon as={FaPlus} /></Button>
        </Stack>
          </Stack>
          <Stack w="100%" spacing={6}>
            <Heading fontSize={15} fontFamily="500">{item.title}</Heading>
            <HStack justifyContent="space-between">
              <Text fontSize={13}>Precio: USD {item.price}</Text>
              <Text fontSize={13}>Subtotal: USD {(item.amount * item.price).toFixed(2)}</Text>
            </HStack>
          </Stack>
        </HStack>
      </Stack>
      <Divider />
    </Stack>
  )
}
export default CartItem