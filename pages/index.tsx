import React from "react";
import {GetStaticProps} from "next";
import {Product} from "../components/product/types";
import api from "../components/product/api";
import {Grid, Heading, Stack, Text, Image, Divider} from "@chakra-ui/react"
import Navbar from "../components/ui/Navbar/Navbar";
import Link from "next/link"
interface Props {
  products: Product[];
}
const IndexRoute: React.FC<Props> = ({products})=>{
  return (
    <Stack>
      <Navbar />
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">{products.map((product)=>(
        <Stack key={product.id} bg="gray.100" _hover={{boxShadow:"dark-lg"}}>
          <Link href={`/product/${product.id}`}>
            <a>
              <Image src={product.image} h={300} w={300} objectFit="cover" alt={product.title} />
              <Divider />
              <Stack p={5}>
                <Heading fontSize={22} fontWeight={600}>{product.price}</Heading>
                <Text color="gray.600" fontSize={15}>{product.title}</Text>
              </Stack>
            </a>
          </Link>
        </Stack>
            ))}
      </Grid>  
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