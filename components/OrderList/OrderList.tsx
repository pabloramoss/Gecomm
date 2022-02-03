import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, DrawerCloseButton, DrawerFooter, Flex, Text, Stack, Divider, Icon, useAccordionItemState } from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { FaTimesCircle } from 'react-icons/fa';
import Cart from './Cart';
import { Item } from 'framer-motion/types/components/Reorder/Item';

const OrderList = ({cartItems, addToCart, removeFromCart})=> {
  const {handleAddToCart} = addToCart
  const {handleRemoveFromCart} = removeFromCart
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const handleCheckout = ()=> {
    onClose
  }
  const getTotalItems = (items => items.reduce((counter, item)=> counter + item.amount, 0) )


  return(
    <Flex>
      <Button ref={btnRef} colorScheme='teal' px={6} onClick={onOpen}>
        Tu pedido ({cartItems.length} producto/s)
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader alignSelf="center">Pedido ({getTotalItems(cartItems)})</DrawerHeader>
          <DrawerBody>
            <Cart 
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            />
          </DrawerBody>
          <Divider />
          <DrawerFooter justifyContent="center" flexDirection="column">
            <Stack direction="row" gap={15}>
              <Text>Total estimado</Text>
              <Text>hola</Text>
            </Stack>
            <Link href="/checkout">
              <a>
                <Button colorScheme="green" onClick={handleCheckout}>Completar pedido</Button>
              </a>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
export default OrderList

/* items.reduce((counter, item)=> counter + item.amount, 0) */