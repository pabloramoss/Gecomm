import React from 'react';
import { Product } from './types';
import {Heading, Stack, Text} from "@chakra-ui/react"

const ProductCard = ( {id, image, title, price})=> {

  return(
    <Stack key={id} bg="gray.100" _hover={{boxShadow:"dark-lg"}}>
        <Image src={image} h={300} w={300} objectFit="cover" alt={title} />
        <Divider />
        <Stack p={5}>
          <Heading fontSize={22} fontWeight={600}>{price}</Heading>
          <Text color="gray.600" fontSize={15}>{title}</Text>
        </Stack>
      </Stack>
  )
}
export default ProductCard