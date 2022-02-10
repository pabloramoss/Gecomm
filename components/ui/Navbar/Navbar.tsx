import React from 'react';
import {Icon, Stack, Image, Heading, Link, Container, HStack, IconButton, Button, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Menu, MenuItem, MenuButton, MenuList, useDisclosure} from "@chakra-ui/react"
import { FaBars, FaWindowClose, FaWhatsappSquare, FaWhatsapp } from 'react-icons/fa';
import NextLink from "next/link"

const Navbar: React.FC = ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return(
    <Stack py={3} bg="white" pos="fixed" w="100%" zIndex={100}>
      <Container maxW="container.xl" px={["16px", "16px", "16px", "0"]}>
        <HStack justifyContent="space-between" alignItems="end">
          <Image src='https://via.placeholder.com/50' alt='logo'/>
          <Stack
            display={["none", "none", "none", "flex"]}
            direction="row" 
            gap={3}
            >
            <NextLink href="#fibra-optica" passHref><Button size="sm">Fibra optica</Button></NextLink>
            <NextLink href="#caja-empalmes" passHref><Button size="sm">Caja de empalmes</Button></NextLink>
            <NextLink href="#splitters" passHref><Button size="sm">Splitters de fibra optica</Button></NextLink>
            <NextLink href="/#herrajes" scroll><Button size="sm">Herrajes</Button></NextLink>
            <NextLink href="/#herramientas" scroll><Button size="sm">Herramientas</Button></NextLink>
            <NextLink href="/#morseteria" scroll><Button size="sm">Morseteria</Button></NextLink>
          </Stack>
          <Link href='https://api.whatsapp.com/send?phone=5493424636292&text=Hola.%20Que%20tal.%20' isExternal>
            <Icon w={10} h={10} as={FaWhatsappSquare} color="green.400" display={["none", "none", "none", "flex"]} />
          </Link>
          <Button onClick={onOpen } display={["flex", "flex", "flex", "none"]}><FaBars /></Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="lg">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader  width="100%" borderBottomWidth='1px' justifyContent="end">
                <HStack width="100%" justifyContent="spacer-between" position="relative">
                  <Heading fontSize={20}>Categorias</Heading>
                  <IconButton size="sm" position="absolute" right={0} onClick={onClose} alignSelf="end" justifySelf="end" aria-label='Close button' icon={<FaWindowClose />} />
                </HStack>
              </DrawerHeader>
              <DrawerBody>
                <NextLink href="#fibra-optica" scroll><Button width="100%" onClick={onClose} my={3}>Fibra optica</Button></NextLink>
                <NextLink href="#caja-empalmes" scroll><Button width="100%" onClick={onClose} my={3}>Caja de empalmes</Button></NextLink>
                <NextLink href="#splitters" scroll><Button width="100%" onClick={onClose} my={3}>Splitters de fibra optica</Button></NextLink>
                <NextLink href="#herrajes" scroll><Button width="100%" onClick={onClose} my={3}>Herrajes</Button></NextLink>
                <NextLink href="#herramientas" scroll><Button width="100%" onClick={onClose} my={3}>Herramientas</Button></NextLink>
                <NextLink href="#morseteria" scroll><Button width="100%" onClick={onClose} my={3}>Morseteria</Button></NextLink>
                <Link href='https://api.whatsapp.com/send?phone=5493424636292&text=Hola.%20Que%20tal.%20' isExternal>
                  <Button mt={10} width="100%" colorScheme="green" leftIcon={<FaWhatsapp />}>Contactate</Button>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Stack>
  )
}
export default Navbar