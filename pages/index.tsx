import React, { useState } from "react";
import {GetStaticProps} from "next";
import {Product} from "../components/product/types";
import api from "../components/product/api";
import {Grid, Heading, Stack, Text, Image, Divider, Button, Flex} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Link from "next/link"
import ProductCard from "../components/product/ProductCard"
import { CallTracker } from "assert";
import OrderList from "../components/OrderList/OrderList";
import {useLocalStorage} from "../src/useLocalStorage"
interface Props {
  products: Product[];
}
const IndexRoute: React.FC<Props> = ({products})=>{
  const [cart, setCart] = useState([])
  const [cartString, setCartString] = useLocalStorage("cart", "")
  const handleAddToCart = (product)=>{
    setCart(cart => cart.concat(product))
    console.log(cart)
  }
  console.log(products)




  return (
    <Stack>
      {/* <Navbar /> */}
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">{products.map((product)=>(
        <Stack key={product.id} bg="gray.100" _hover={{boxShadow:"dark-lg"}}>
          <Image src={product.image} h={300} w={300} objectFit="cover" alt={product.title} />
          <Divider />
          <Stack p={5}>
            <Heading fontSize={22} fontWeight={600}>{product.price}</Heading>
            <Text justifySelf="center" color="gray.600" fontSize={15}>{product.title}</Text>
            <Button colorScheme="blue" onClick={()=> setCart(cart => cart.concat(product))}>Agregar al carrito</Button>
          </Stack>
        </Stack>
            ))}
      </Grid>
      <Flex position="fixed">
        {Boolean(cart.length) && <OrderList cart={cart} />}
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