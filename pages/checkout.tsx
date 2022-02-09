import React, { useEffect, useState } from 'react'
import { Stack, Text, Heading, Icon, Grid, GridItem, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Flex, Input, useClipboard, Badge, HStack, Divider } from '@chakra-ui/react';
import Link from "next/link"
import { FaMapMarkerAlt, FaTruck, FaUniversity, FaArrowLeft, FaDollarSign, FaUserCircle, FaRegCheckCircle } from 'react-icons/fa';
import CheckoutCard from '../components/Checkout/CheckoutCard';
import CheckoutList from '../components/Checkout/CheckoutList';
import {GetStaticProps} from "next";
import api from "../components/Checkout/api"
import {useRouter} from "next/router"

const Checkout = ({cart, clientInfo, dolarPrice})=> {
  const subTotalProducts = cart.map(item=>item.amount*item.price)
  const subTotal = subTotalProducts.reduce((counter, item)=> counter + item, 0)
  const iva = 21
  const subtotalIVA = subTotal * (iva/100)
  const total = subTotal + subtotalIVA
  const totalAR = total * dolarPrice
  const { isOpen, onOpen, onClose } = useDisclosure()
  const CBU = '2384723428374234'
  const { hasCopied, onCopy } = useClipboard(CBU)
  const router = useRouter()
  const handleGoBack= ()=> router.push('/UserForm')

  return(
    <Stack alignItems="center">
      <Stack>
        <Heading fontSize={25}>Revisá y confirmá tu compra</Heading>
        <Stack>
          <Heading fontSize={20}>Detalle de entrega</Heading>
          {clientInfo.shipping===true
          ?<CheckoutCard 
          icon={FaTruck}
          title="Envio a domicilio"
          text=""
          />
          :<CheckoutCard 
          icon={FaTruck}
          title="Retiro en el local"
          text=""
          />
          }
          {clientInfo.shipping===true
          ?<CheckoutCard 
          icon={FaMapMarkerAlt}
          title={clientInfo.address}
          text={clientInfo.zipCode + " - " + clientInfo.province + " - " + clientInfo.city }
          />
          :<CheckoutCard 
          icon={FaMapMarkerAlt}
          title="Alvear 7929"
          text="Santa Fe Capital"
          />
          }
        </Stack>
        <Heading fontSize={20}>Forma de pago</Heading>
        <CheckoutCard 
          icon={FaUniversity}
          title="Transferencia bancaria"
          text=""
          />
          <Stack bg="gray.300"p={5} borderRadius={10}>
            <Grid templateColumns="5fr repeat(4,1fr)">
              <Heading fontSize={15}>Producto</Heading>
              <Heading justifySelf="center" fontSize={15}>Cantidad</Heading>
              <Heading justifySelf="center" fontSize={15}>Precio</Heading>
              <Heading justifySelf="center" fontSize={15}>IVA</Heading>
              <Heading justifySelf="center" fontSize={15}>Subtotal</Heading>
            </Grid>
            {cart.map((product, index)=> <CheckoutList key={index} product={product} />)}
            <Stack alignItems="end">
              <Heading fontSize={15}>Subtotal: USD {subTotal}</Heading>
              <Heading fontSize={15}>IVA 21%: USD {subtotalIVA}</Heading>
              <Heading fontSize={15}>Total: USD {total}</Heading>
              <Heading fontSize={15}>Equivalente en AR$: $ {Math.trunc(totalAR)}</Heading>
              <Heading fontSize={15}>Cotización del dólar: $ {dolarPrice}</Heading>
            </Stack>
          </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-around">
        <Button onClick={handleGoBack} colorScheme="blue" px={5} size="lg"><Icon as={FaArrowLeft} me={3}/>Volver</Button>
        <Button colorScheme="green" px={10} size="lg" onClick={onOpen}>Confirmar compra</Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="20">
          <Icon mt={20} alignSelf="center" h={12} w={12} color="green.300" as={FaRegCheckCircle} />
          <ModalHeader alignSelf="center" roundedTop={20}>Pedido realizado</ModalHeader>
          <ModalCloseButton />
          <ModalBody roundedBottom={20} pb={6}>
            <Stack width="100%">
              <Text>Recibimos su pedido exitosamente</Text>
              <Flex align="center">
                <Text me={2}>El código de referencia es:</Text>
                <Heading fontSize={15}>asasf124kjfdskj23</Heading>
              </Flex>
              <Stack width="100%" direction="row" align="center">
                <Icon w={10} h={10} bg="gray.200" p={2} borderRadius="full" as={FaDollarSign}></Icon>
                <Text>Solo te falta pagar</Text>
                <Badge alignSelf="end" p={2} rounded={10} fontSize="md">$ {totalAR}</Badge>
              </Stack>
              <Divider />
              <HStack>
                <Icon h={6} w={6} color="gray.400" as={FaUserCircle} />
                <Heading fontSize={15}>Datos del vendedor</Heading>
              </HStack>
              <Flex justifyContent="space-between" alignItems="center" mb={2}>
                <Text me={2}>CBU</Text>
                <Stack direction="row" alignItems="center">
                  <Button borderRadius="full" size="sm" onClick={onCopy} ml={2}>
                    {hasCopied ? 'Copiado' : 'Copiar'}
                  </Button>
                  <Badge p={2} rounded={10} fontSize="md">{CBU}</Badge>
                </Stack>
              </Flex>
              <Flex alignItems="center" justifyContent="space-between" mb={2}>
                <Text me={2}>A nombre de:</Text>
                <Badge p={2} rounded={10} fontSize="md">Gonzalo Javier Diaz</Badge>
              </Flex>
              {clientInfo.shipping===false
              ? <Flex alignItems="center" justifyContent="space-between">
                  <Text>Dirección:</Text>
                  <Badge p={2} rounded={10} fontSize="md">Alvear 7929 - Santa Fe Capital</Badge>
                </Flex>
              : ""
              }
              <Text pt={10} alignSelf="center">Muchas gracias por confiar en Gecomm!</Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Stack>
      
    </Stack>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const dolarPrice = parseInt(await api.dolarBlue())
  return {
    props: {
      dolarPrice,
    },
  };
};

export default Checkout