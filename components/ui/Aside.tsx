import React from 'react';
import {Stack, Image, Heading, Link, Divider, HStack, IconButton, Button, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Text, useDisclosure} from "@chakra-ui/react"
import { FaBars, FaWindowClose, FaWhatsapp } from 'react-icons/fa';
import NextLink from "next/link"

const Aside = ({categories})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <Stack py={3} bg="white" w="300px" h="100vh" display={["none", "none", "none", "flex"]} justifyContent="space-between">
        <Stack justifyContent="space-between" height="100%" alignItems="center">
          <Stack>
            <Link href='/'>
              <Image src='/images/gecomm-logo.png' px={3} alt='logo'/>
            </Link>
            <Stack
              display={["none", "none", "none", "flex"]}
              gap={3}
              py={10}
              alignItems="center"
              >
                <Heading color="blue.600" alignSelf="center" fontSize={18}>CATEGORÍAS</Heading>
                <Divider />
                {categories.map(category=><NextLink key={category} href={`/#${encodeURI(category)}`}><Button colorScheme="blue" size="sm" w="80%">{category}</Button></NextLink>)}
              <Link href='https://api.whatsapp.com/send?phone=5493424636292&text=Hola.%20Que%20tal.%20' isExternal>
                <Button borderRadius='full' mt={10} colorScheme="green" leftIcon={<FaWhatsapp />}>Contactanos
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Stack>
            <Divider />
            <Text color="gray.400">©{new Date().getFullYear()} Gecomm</Text>
          </Stack>
        </Stack>
    </Stack>
  )
}
export default Aside