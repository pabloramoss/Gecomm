import React from 'react';
import {Icon, Stack, Image, Link, Container, HStack} from "@chakra-ui/react"
import { FaWhatsappSquare } from 'react-icons/fa';

const NavbarCheckout: React.FC = ()=> {


  return(
    <Stack py={3} bg="white" pos="fixed" w="100%" zIndex={100}>
      <Container maxW="container.xl" px={["16px", "16px", "16px", "0"]}>
        <HStack justifyContent="space-between" alignItems="end">
          <Image src='https://via.placeholder.com/50' alt='gecomm logo'/>
          <Link href='https://api.whatsapp.com/send?phone=5493424636292&text=Hola.%20Que%20tal.%20' isExternal>
            <Icon w={10} h={10} as={FaWhatsappSquare} color="green.400"/>
          </Link>
        </HStack>
      </Container>
    </Stack>
  )
}
export default NavbarCheckout