import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, DrawerCloseButton, DrawerFooter, Flex, Text, Stack, Divider } from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { useLocalStorage } from '../../src/useLocalStorage';

const OrderList = ({cart})=> {
  const [cartLocalStorage, setCartLocalStorage] = useLocalStorage("cart", "")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const idsArray = cart.map(product => product.id)
  //Lista con elementos unicos, luego hay que agregarle un elemento que muestre la cantidad de elementos repetidos
  const orderListFiltered = cart.filter(({id}, index) => !idsArray.includes(id, index + 1))
  const totalPrice = cart.reduce((total, product) => parseInt(total) + parseInt(product.price), 0)
  const handleCheckout = ()=> {
    onClose
    setCartLocalStorage(cart)
  }



  return(
    <Flex>
      <Button ref={btnRef} colorScheme='teal' px={6} onClick={onOpen}>
        Tu pedido ({cart.length} producto/s)
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
          <DrawerHeader alignSelf="center">Pedido ({cart.length})</DrawerHeader>
          <DrawerBody>
            {cart.map((product, index)=><li key={index}>{product.title}</li>)}
          </DrawerBody>
          <Divider />
          <DrawerFooter justifyContent="center" flexDirection="column">
            <Stack direction="row" gap={15}>
              <Text>Total estimado</Text>
              <Text>{totalPrice}</Text>
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