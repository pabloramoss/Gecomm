import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const CheckoutList= ({product})=> {
  const iva: number = 21
  const subTotal = ()=> product.price * (1 + iva/100)

  return(
    <Grid templateColumns="5fr repeat(4,1fr)">
      <GridItem>{product.title}</GridItem>
      <GridItem justifySelf="center">{product.amount}</GridItem>
      <GridItem>{product.price}</GridItem>
      <GridItem>{iva}</GridItem>
      <GridItem>{subTotal()}</GridItem>
    </Grid>
  )
}
export default CheckoutList