import React, { useEffect } from "react";
import {GetStaticProps} from "next";
import {Product} from "../components/product/types";
import api from "../components/product/api";
import {Grid, Heading, Stack, Text, Image, Divider, Button, Flex} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Link from "next/link"
import ProductCard from "../components/product/ProductCard"
import OrderList from "../components/OrderList/OrderList";
import useSessionStorage from "../components/useSessionStorage"
import apiDolar from "../components/Checkout/api"


const IndexRoute = ({products, handleAddToCart, handleRemoveFromCart, cart})=>{

  return (
    <Stack>
      {/* <Navbar /> */}
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">{products.map((item)=>(
        <Stack key={item.id} bg="gray.100" _hover={{boxShadow:"dark-lg"}}>
          <Image src={item.image} h={300} w={300} objectFit="cover" alt={item.title} />
          <Divider />
          <Stack p={5}>
            <Heading fontSize={22} fontWeight={600}>{item.price}</Heading>
            <Text justifySelf="center" color="gray.600" fontSize={15}>{item.title}</Text>
            <Button colorScheme="blue" onClick={()=>handleAddToCart(item)}>Agregar al carrito</Button>
          </Stack>
        </Stack>
            ))}
      </Grid>
      <Flex position="fixed">
        {Boolean(cart.length) && <OrderList cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />}
      </Flex>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    props: {
      products,
    },
  };
};
export default IndexRoute;