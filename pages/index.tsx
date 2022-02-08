import React, { useEffect } from "react";
import {GetStaticProps} from "next";
import {Product} from "../components/product/types";
import api from "../components/product/api";
import {Grid, Heading, Stack, Text, Image, Divider, Button, Flex, Icon, Container} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Link from "next/link"
import OrderList from "../components/OrderList/OrderList";
import { FaTruck } from 'react-icons/fa';


const IndexRoute = ({products, handleAddToCart, handleRemoveFromCart, cart})=>{

  return (
    <Stack bg="gray.200">
      <Navbar />
        <Container maxW="container.xl" alignSelf="center" p={0}>
          <Text fontSize={30} color="gray.500">Categoria</Text>
          <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">{products.map((item)=>(
            <Stack position="relative" key={item.id} bg="white" borderRadius={10} _hover={{boxShadow:"dark-lg"}}>
              <Image alignSelf="center" src={item.image} h={250} w={250} objectFit="scale-down" alt={item.title} />
              <Icon zIndex={10} position="absolute" right="10%" top="53%" color="green.400" h={10} w={10} p={2} bg="white" borderRadius="full" as={FaTruck} />
              <Divider />
              <Stack alignItems="space-between" p={5}>
                <Heading fontSize={22} fontWeight={600}>{item.price}</Heading>
                <Text justifySelf="center" color="gray.600" fontSize={15}>{item.title}</Text>
                <Button colorScheme="blue" onClick={()=>handleAddToCart(item)}>Agregar al carrito</Button>
              </Stack>
            </Stack>
                ))}
          </Grid>

        </Container>
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