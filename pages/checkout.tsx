import React from 'react'
import { Image, Text, Stack, Heading, Icon, Grid, GridItem, Input } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaTruck, FaUniversity } from 'react-icons/fa';
import CheckoutCard from '../components/Checkout/CheckoutCard';

const Checkout: React.FC = ()=> {

  return(
    <Stack>
      <Stack>
        <Heading>Detalle de su pedido</Heading>
        <Stack>
          <Heading fontSize={20}>Detalle de entrega</Heading>
          <CheckoutCard 
          icon={FaMapMarkerAlt}
          title="Calle falsa 123"
          text="CP 3000 - Arroyo leyes"
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
        <Grid templateColumns="5fr repeat(4,1fr)">
          <GridItem>Producto</GridItem>
          <GridItem>Cantidad</GridItem>
          <GridItem>Precio</GridItem>
          <GridItem>IVA incluido</GridItem>
          <GridItem>Subtotal</GridItem>
        </Grid>
        <Stack>
          <Heading>Observaciones del cliente</Heading>
          <Text>Si desea agregar observaciones</Text>
          <Input />
        </Stack>
      </Stack>
    </Stack>
  )
}
export default Checkout