import React, { useEffect, useState } from 'react'
import { Stack, Text, Heading, Icon, Grid, GridItem, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Flex, Input, useClipboard, Badge, HStack, Divider } from '@chakra-ui/react';
import Link from "next/link"
import { FaMapMarkerAlt, FaTruck, FaUniversity, FaArrowLeft, FaDollarSign, FaUserCircle, FaRegCheckCircle } from 'react-icons/fa';
import CheckoutCard from '../components/Checkout/CheckoutCard';
import CheckoutList from '../components/Checkout/CheckoutList';

const Checkout2 = ()=> {
  const [name, setName] = useState()
  const [company, setCompany] = useState()
  const [cuit, setCuit] = useState()
  const [email, setEmail] = useState()
  const [whatsapp, setWhatsapp] = useState()

  const [address, setAddress] = useState()
  const [province, setProvince] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState()
  const [userInfo, setUserInfo] = useState()

  const [shipping, setShipping] = useState()

  const [cartItems, setCartItems] = useState([])

  const [dolar, setDolar] = useState(null)
  useEffect(()=>{
    setName(JSON.parse(sessionStorage.getItem("name")))
    setCompany(JSON.parse(sessionStorage.getItem("company")))
    setCuit(JSON.parse(sessionStorage.getItem("cuit")))
    setEmail(JSON.parse(sessionStorage.getItem("email")))
    setWhatsapp(JSON.parse(sessionStorage.getItem("whatsapp")))

    setCartItems(JSON.parse(sessionStorage.getItem("cartItems")))

    setShipping(JSON.parse(sessionStorage.getItem("shippingMethod")))

    if( shipping ) {
      setAddress(JSON.parse(sessionStorage.getItem("address")))
      setProvince(JSON.parse(sessionStorage.getItem("province")))
      setCity(JSON.parse(sessionStorage.getItem("city")))
      setZipCode(JSON.parse(sessionStorage.getItem("zipCode")))
    }
    

    setDolar(parseFloat(sessionStorage.getItem("dolarPrice")))
  },[])

  const subTotalProducts = cartItems.map(item=>item.amount*item.price)
  const subTotal = subTotalProducts.reduce((counter, item)=> counter + item, 0)
  const iva = 21
  const subtotalIVA = subTotal * iva/100
  const total = subTotal + subtotalIVA
  const totalAR = total * dolar

  const { isOpen, onOpen, onClose } = useDisclosure()
  const CBU = '2384723428374234'
  const { hasCopied, onCopy } = useClipboard(CBU)

  const shippingDetail = ()=>{
    if (shipping) {
      return <CheckoutCard 
      icon={FaMapMarkerAlt}
      title={address}
      text={zipCode + " - " + province + " - " + city }
      />
    }
    return <CheckoutCard 
    icon={FaMapMarkerAlt}
    title="Retiro en el local"
    text=""
    />
  }

  return(
    <Stack alignItems="center">
      <Stack>
        <Heading fontSize={25}>Revisá y confirmá tu compra</Heading>
        <Stack>
          <Heading fontSize={20}>Detalle de entrega</Heading>
          {shippingDetail()}
        </Stack>
        <Heading fontSize={20}>Forma de pago</Heading>
        <CheckoutCard 
          icon={FaUniversity}
          title="Transferencia bancaria"
          text=""
          />
          <Stack bg="gray.300"p={5} borderRadius={10}>
            <Grid templateColumns="5fr repeat(4,1fr)">
              <Heading fontSize={15}>Producto</Heading>
              <Heading justifySelf="center" fontSize={15}>Cantidad</Heading>
              <Heading justifySelf="center" fontSize={15}>Precio</Heading>
              <Heading justifySelf="center" fontSize={15}>IVA</Heading>
              <Heading justifySelf="center" fontSize={15}>Subtotal</Heading>
            </Grid>
            {cartItems.map((product, index)=> <CheckoutList key={index} product={product} />)}
            <Stack alignItems="end">
              <Heading fontSize={15}>Subtotal: USD {subTotal}</Heading>
              <Heading fontSize={15}>IVA 21%: USD {subtotalIVA}</Heading>
              <Heading fontSize={15}>Total: USD {total}</Heading>
              <Heading fontSize={15}>Equivalente en AR$: $ {totalAR}</Heading>
              <Heading fontSize={15}>Cotización del dólar: $ {dolar}</Heading>
            </Stack>
          </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-around">
        <Link href="/UserForm">
          <a>
            <Button colorScheme="blue" px={5} size="lg"><Icon as={FaArrowLeft} me={3}/>Volver</Button>
          </a>
        </Link>
        <Button colorScheme="green" px={10} size="lg" onClick={onOpen}>Confirmar compra</Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="20">
          <Icon mt={20} alignSelf="center" h={12} w={12} color="green.300" as={FaRegCheckCircle} />
          <ModalHeader alignSelf="center" roundedTop={20}>Pedido realizado</ModalHeader>
          <ModalCloseButton />
          <ModalBody roundedBottom={20} pb={6}>
            <Stack>
              <Text>Recibimos su pedido exitosamente</Text>
              <Flex align="center">
                <Text me={2}>El código de referencia es:</Text>
                <Heading fontSize={15}>asasf124kjfdskj23</Heading>
              </Flex>
              <Stack direction="row" align="center">
                <Icon w={10} h={10} bg="gray.200" p={2} borderRadius="full" as={FaDollarSign}></Icon>
                <Text>Solo te falta pagar</Text>
                <Badge p={2} rounded={10} fontSize="md">$ {totalAR}</Badge>
              </Stack>
              <Divider />
              <HStack>
                <Icon h={6} w={6} color="gray.400" as={FaUserCircle} />
                <Heading fontSize={15}>Datos del vendedor</Heading>
              </HStack>
              <Flex alignItems="center" mb={2}>
                <Text me={2}>CBU</Text>
                <Badge p={2} rounded={10} fontSize="md">{CBU}</Badge>
                <Button borderRadius="full" size="sm" onClick={onCopy} ml={2}>
                  {hasCopied ? 'Copiado' : 'Copiar'}
                </Button>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <Text me={2}>A nombre de:</Text>
                <Badge p={2} rounded={10} fontSize="md">Gonzalo Javier Diaz</Badge>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Stack>
      
    </Stack>
  )
}
export default Checkout2