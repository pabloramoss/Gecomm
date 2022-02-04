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
import apiDolar from "../components/dolarPrice/api"


const IndexRoute = ({products, dolarPrice})=>{
  useEffect(()=>{window.sessionStorage.setItem("dolarPrice", dolarPrice)},[])
  const [cartItems, setCartItems] = useSessionStorage("cartItems",[])
  const handleAddToCart = (clickedItem)=>{
    setCartItems(prev=> {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if(isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id 
          ? { ...item, amount: item.amount + 1}
          : item
        )
      }
      //First time the item is added
      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  
  const handleRemoveFromCart = (id)=>{
    setCartItems(prev => (
      prev.reduce((counter, item)=>{
        if (item.id === id) {
          if (item.amount === 1) return counter;
          return [...counter, {...item, amount: item.amount -1}];
        }else{
          return [...counter, item]
        }
      },[])
    ))
  }


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
        {Boolean(cartItems.length) && <OrderList cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />}
      </Flex>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dolarPrice = await apiDolar.dolarBlue()
  const products = await api.list();
  return {
    props: {
      products,
      dolarPrice,
    },
  };
};
export default IndexRoute;