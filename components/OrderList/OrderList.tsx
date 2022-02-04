import { 
  Button, 
  Drawer, 
  Icon, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerHeader, 
  DrawerBody, 
  useDisclosure, 
  DrawerCloseButton, 
  DrawerFooter, 
  Flex, 
  Text, 
  Stack, 
  Divider, 
  VStack
} from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';


const OrderList = ({cartItems, addToCart, removeFromCart})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const getTotalItems = (items => items.reduce((counter, item)=> counter + item.amount, 0) )
  const totalPrice = (items => items.reduce((counter, item)=> counter + item.amount * item.price, 0))

  return(
    <Flex>
      <VStack width="100vw">
        <Button top="90vh" position="absolute" ref={btnRef} colorScheme='teal' px={8} onClick={onOpen}><Icon as={FaShoppingCart} me={5}/>
          Tu pedido ({getTotalItems(cartItems)})
        </Button>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
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
              <Text my={5}>Total estimado: $ {totalPrice(cartItems)}</Text>
            </Stack>
            <Link href="/UserForm">
              <a>
                <Button colorScheme="green">Completar pedido</Button>
              </a>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
export default OrderList