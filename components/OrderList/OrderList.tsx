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


const OrderList = ({cart, handleRemoveFromCart,handleAddToCart})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const getTotalItems = (items => items.reduce((counter, item)=> counter + item.amount, 0) )
  const totalPrice = (items => items.reduce((counter, item)=> counter + item.amount * item.price, 0))

  return(
    <Flex>
      <VStack width="100vw">
        <Button top="90vh" position="absolute" ref={btnRef} colorScheme='teal' px={8} onClick={onOpen}><Icon as={FaShoppingCart} me={5}/>
          Tu pedido ({getTotalItems(cart)})
        </Button>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader alignSelf="center">Pedido ({getTotalItems(cart)})</DrawerHeader>
          <DrawerBody>
            <Cart 
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleAddToCart={handleAddToCart}
            />
          </DrawerBody>
          <Divider />
          <DrawerFooter justifyContent="center" flexDirection="column">
            <Stack direction="row" gap={15}>
              <Text my={5}>Total estimado: $ {totalPrice(cart)}</Text>
            </Stack>
            <Link href="/UserForm" passHref>
              <Button colorScheme="green">Completar pedido</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
export default OrderList