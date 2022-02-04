import React, { useEffect, useState } from 'react'
import { Stack, Heading, Icon, Grid, GridItem, Button } from '@chakra-ui/react';
import Link from "next/link"
import { FaMapMarkerAlt, FaTruck, FaUniversity, FaArrowLeft } from 'react-icons/fa';
import CheckoutCard from '../components/Checkout/CheckoutCard';
import CheckoutList from '../components/Checkout/CheckoutList';

const Checkout = ()=> {
  const [cartItems, setCartItems] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [dolar, setDolar] = useState(null)
  useEffect(()=>{
    setCartItems(JSON.parse(sessionStorage.getItem("cartItems")))
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")))
    setDolar(parseFloat(sessionStorage.getItem("dolarPrice")))
  },[])

  const subTotalProducts = cartItems.map(item=>item.amount*item.price)
  const subTotal = subTotalProducts.reduce((counter, item)=> counter + item, 0)
  const iva = 21
  const subtotalIVA = subTotal * iva/100
  const total = subTotal + subtotalIVA
  const totalAR = total * dolar

  return(
    <Stack alignItems="center">
      <Stack>
        <Heading fontSize={25}>Revisá y confirmá tu compra</Heading>
        <Stack>
          <Heading fontSize={20}>Detalle de entrega</Heading>
          <CheckoutCard 
          icon={FaMapMarkerAlt}
          title={userInfo.name}
          text={userInfo.company}
          />
          <CheckoutCard 
          icon={FaTruck}
          title="Acordar con el vendedor"
          text=""
          />
        </Stack>
        <Heading fontSize={20}>Forma de pago</Heading>
        <CheckoutCard 
          icon={FaUniversity}
          title="Transferencia bancaria"
          text=""
          />
          <Stack bg="gray.300"p={5} borderRadius={10}>
            <Grid templateColumns="5fr repeat(4,1fr)">
              <GridItem>Producto</GridItem>
              <GridItem>Cantidad</GridItem>
              <GridItem>Precio</GridItem>
              <GridItem>IVA</GridItem>
              <GridItem>Subtotal</GridItem>
            </Grid>
            {cartItems.map((product, index)=> <CheckoutList key={index} product={product} />)}
            <Stack alignItems="end">
              <Heading fontSize={15}>Subtotal: {subTotal}</Heading>
              <Heading fontSize={15}>IVA: {subtotalIVA}%</Heading>
              <Heading fontSize={15}>Total: {total}</Heading>
              <Heading fontSize={15}>Equivalente en AR$: {totalAR}</Heading>
              <Heading fontSize={15}>Cotización del dólar: {dolar}</Heading>
            </Stack>
          </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-around">
        <Link href="/UserForm">
          <a>
            <Button colorScheme="blue" px={5} size="lg"><Icon as={FaArrowLeft} me={3}/>Volver</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button colorScheme="green" px={10} size="lg">Confirmar compra</Button>
          </a>
        </Link>
      </Stack>
    </Stack>
  )
}
export default Checkout