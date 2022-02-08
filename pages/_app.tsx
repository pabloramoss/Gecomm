import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {AppProps} from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isShippingMethod, setIsShippinhMethod] = useState(false)
  const [clientInfo, setClientInfo] = useState({
    name: "",
    company: "",
    cuit: "",
    whatsapp: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    province: "",
    shipping: true,
  })
  
  const [cart, setCart] = useState([])
  const handleAddToCart = (clickedItem)=>{
    setCart(prev=> {
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
    setCart(prev => (
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
    <ChakraProvider>
        <Component 
          {...pageProps}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          cart={cart}
          clientInfo={clientInfo}
          isShippingMethod={isShippingMethod}
          setIsShippingMethod={setIsShippinhMethod}
          setClientInfo={setClientInfo}
        />
    </ChakraProvider>
  );
};

export default App;