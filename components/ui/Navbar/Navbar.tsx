import React from 'react';
import {Icon, Stack, Image, Link, Container, HStack} from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa';

const Navbar: React.FC = ()=> {

  return(
    <Stack py={3} bg="white">
      <Container maxW="container.xl" alignSelf="center" p={0}>
        <HStack justifyContent="space-between">
          <Image src='https://via.placeholder.com/50' alt='logo'/>
          <Stack direction="row" gap={3}>
            <Link>Fibra optica</Link>
            <Link>Caja de empalmes</Link>
            <Link>Splitters de fibra optica</Link>
            <Link>Herrajes</Link>
            <Link>Herramientas</Link>
            <Link>Morseteria</Link>
          </Stack>
          <Icon w={6} h={6} as={FaShoppingCart}></Icon>
        </HStack>
      </Container>
    </Stack>
  )
}
export default Navbar