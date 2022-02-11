import React, {useState} from "react";
import { Heading, Stack, Text, Image, Divider, Button} from "@chakra-ui/react"

const ProductCard = ({product})=> {
  const [cart, setCart] = useState([])

  return(
    <Stack bg="gray.100" _hover={{boxShadow:"dark-lg"}}>
      <Image src={product.image} h={300} w={300} objectFit="cover" alt={product.title} />
      <Divider />
      <Stack alignSelf="end" p={5}>
        <Text color="gray.600" fontSize={15}>{product.title}</Text>
        <Text color="gray.600" fontSize={15}>{product.description}</Text>
      </Stack>
    <Button onClick={()=>setCart(cart => cart.concat(product))}>Agregar al carrito</Button>
    </Stack>
  )
}
export default ProductCard