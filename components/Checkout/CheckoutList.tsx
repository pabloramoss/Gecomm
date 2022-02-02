import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const CheckoutList= ({product, iva})=> {

  return(
    <Grid templateColumns="5fr repeat(4,1fr)">
      <GridItem>{product.title}</GridItem>
      <GridItem>{product.amount}</GridItem>
      <GridItem>{product.price}</GridItem>
      <GridItem>{iva}</GridItem>
      <GridItem>{product.subtotal}</GridItem>
    </Grid>
  )
}
export default CheckoutList