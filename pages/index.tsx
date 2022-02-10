import React, { useEffect } from "react";
import {GetStaticProps} from "next";
import {Product} from "../components/product/types";
import api from "../components/product/api";
import {Grid, Heading, Stack, Text, Image, Divider, Button, Flex, Icon, Container, Badge} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Link from "next/link"
import OrderList from "../components/OrderList/OrderList";
import { FaTruck } from 'react-icons/fa';

const IndexRoute = ({products, handleAddToCart, handleRemoveFromCart, cart})=>{
  const productsGrouping = products.reduce((a, { category, title, price, iva, image  }) => {
    const foundRole = a.find(({ productCategory }) => productCategory === category);
    if (foundRole) foundRole.productsGroup.push({ title, price, iva, image});
    else a.push({ productCategory: category, productsGroup: [{ title, price, iva, image }] });
    return a;
  }, []);

const productsSection = productsGrouping.map(productCat=>(
  <Stack key={productCat.productCategory} pb={10}>
    <Text id={productCat.productCategory} color="gray.400" fontSize={25}>{productCat.productCategory}</Text>
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {productCat.productsGroup.map(product=>(
      <Stack position="relative" key={product.title} bg="white" borderRadius={10} _hover={{boxShadow:"dark-lg"}}>
        <Image alignSelf="center" src={product.image} h={250} w={250} objectFit="scale-down" alt={product.title} />
        <Icon zIndex={10} position="absolute" right="10%" top="53%" color="green.400" h={10} w={10} p={2} bg="white" as={FaTruck} borderRadius="full" />
        <Divider />
        <Stack alignItems="space-between" p={5}>
          <Heading fontSize={22} fontWeight={600}> USD {product.price}<Badge ms={3} borderRadius={5}>+IVA({product.iva}%)</Badge></Heading>
          <Text justifySelf="center" color="gray.600" fontSize={15}>{product.title}</Text>
          <Button colorScheme="blue" onClick={()=>handleAddToCart(product)}>Agregar al carrito</Button>
        </Stack>
      </Stack>
          ))
}
      </Grid>
  </Stack>
  ))
  

  return (
    <Stack bg="gray.200">
      <Navbar/>
      <Stack position="relative" bg="blue.400" height="350px">
        <Stack position="absolute" bottom={0} left={40} py={20} w={450}>
          <Heading fontSize={30}>Experiencia, responsabilidad y profesionalismo en la provisión de materiales.</Heading>
          <Text fontWeight={600}>Mayorista en telecomunicaciones</Text>

        </Stack>
      </Stack>
      <Heading pt={20} fontSize={30} alignSelf="center">PRODUCTOS</Heading>
      <Container maxW="container.xl" alignSelf="center" p={0} pt={5}>
        {productsSection}
      </Container>
      <Flex position="fixed" zIndex={50}>
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