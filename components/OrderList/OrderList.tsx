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
  VStack,
  Heading,
  HStack
} from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';


const OrderList = ({cart, handleRemoveFromCart,handleAddToCart})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const IVA = 21
  const getTotalItems = (items => items.reduce((counter, item)=> counter + item.amount, 0) )
  const subtotalPrice = (items => items.reduce((counter, item)=> counter + item.amount * item.price, 0))
  //const subtotalIVA = (items => items.reduce((counter, item)=> (counter + item.amount * item.price) * (IVA/100), 0))
  //const totalPrice = (items => items.reduce((counter, item)=> (counter + item.amount * item.price) * (1+IVA/100), 0))
  //Cuando se agregue el tipo de iva en cada produdcto
  const subtotalIVA = (items => items.reduce((counter, item)=> ((counter + (item.amount * item.price) * (item.iva/100) )), 0))
  const totalPrice = (items => items.reduce((counter, item)=> ((counter + item.amount * item.price + subtotalIVA(items))), 0))


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
            <Stack my={3} spacing={4} width="100%">
              <HStack width="100%" justifyContent="space-between">
                <Heading fontSize={18} opacity={0.6}>Subtotal:</Heading>
                <Heading fontSize={18} opacity={0.6}>USD {subtotalPrice(cart)}</Heading>
              </HStack>
              <HStack width="100%" justifyContent="space-between">
                <Heading fontSize={18} opacity={0.6}>IVA:</Heading>
                <Heading fontSize={18} opacity={0.6}>USD {Math.trunc(subtotalIVA(cart))}</Heading>
              </HStack>
              <Divider />
              <HStack width="100%" justifyContent="space-between">
                <Heading fontSize={18}>Total:</Heading>
                <Heading fontSize={18}>USD {Math.trunc(totalPrice(cart))}</Heading>
              </HStack>
            </Stack>
            <Link href="/UserForm" passHref>
              <Button width="100%" colorScheme="green">Completar pedido</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
export default OrderList