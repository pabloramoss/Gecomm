import React, { useState } from 'react';
import { Button, Grid, GridItem, Heading, Icon, Input, Link, Stack, HStack, VStack, Radio, RadioGroup, FormControl } from '@chakra-ui/react';
import useSessionStorage from '../components/useSessionStorage';
import CheckoutList from '../components/Checkout/CheckoutList';
import { FaArrowLeft } from 'react-icons/fa';
import CheckoutCard from '../components/Checkout/CheckoutCard';


const UserForm = ()=> {
  const [userInfo, setUserInfo] = useSessionStorage("userInfo",{
    name: "",
    company: "",
    cuit: "",
    whatsapp: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    province: "",
  })

  const [clientName, setClientName] = useState("")
  const [clientCompany, setClientCompany] = useState("")
  const [clientCuit, setClientCuit] = useState("")
  const [clientWhatsapp, setClientWhatsapp] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [clientZipCode, setClientZipCode] = useState("")
  const [clientCity, setClientCity] = useState("")
  const [clientProvince, setClientProvince] = useState("")
  const [shippingMethod, setShippingMethod] = useState("1")

  const handleSubmit = ()=>{
    setUserInfo({
      name: clientName,
      company: clientCompany,
      cuit: clientCuit,
      whatsapp: clientWhatsapp,
      email: clientEmail,
      address: clientAddress,
      zipCode: clientZipCode,
      city: clientCity,
      province: clientProvince,
    })
  }

  return(
    <Stack alignItems="center" justifyContent="center" width="100vw" height="100vh">
      <HStack bg="gray.300" width={600} rounded={20} p={20}>
        <HStack>
          <Stack>
            <Heading fontSize={22}>Datos del cliente</Heading>
            <HStack>
              <Heading fontSize={16} alignSelf="center">Nombre</Heading>
              <Input  type="text" onChange={(e)=> setClientName(e.target.value)} />
            </HStack>
            <Stack direction="row">
              <Heading fontSize={16} alignSelf="center">Empresa</Heading>
              <Input type="text" onChange={(e)=> setClientCompany(e.target.value)} />
            </Stack>
            <Stack direction="row">
              <Heading fontSize={16} alignSelf="center">Cuit</Heading>
              <Input type="number" onChange={(e)=> setClientCuit(e.target.value)} />
            </Stack>
            <Stack direction="row">
              <Heading fontSize={16} alignSelf="center">Whatsapp</Heading>
              <Input type="tel" onChange={(e)=> setClientWhatsapp(e.target.value)} />
            </Stack>
            <Stack direction="row">
              <Heading fontSize={16} alignSelf="center">Email</Heading>
              <Input type="email" onChange={(e)=> setClientEmail(e.target.value)} />
            </Stack>
          </Stack>
          <Stack>
            <Heading fontSize={22}>Datos de envío</Heading>
            <RadioGroup onChange={setShippingMethod} value={shippingMethod}>
              <Stack direction='row'>
                <Radio value='1'>Envío a domicilio</Radio>
                <Radio value='2'>Retiro en el local</Radio>
              </Stack>
            </RadioGroup>
            <HStack>
              <Heading fontSize={16}>Dirección</Heading>
              <FormControl isRequired>

              <Input type="text" onChange={(e)=> setClientAddress(e.target.value)} />
              </FormControl>
            </HStack>
            <HStack>
              <Heading fontSize={16}>Código postal</Heading>
              <Input type="number" onChange={(e)=> setClientZipCode(e.target.value)} />
            </HStack>
            <HStack>
              <Heading fontSize={16}>Ciudad</Heading>
              <Input type="text" onChange={(e)=> setClientCity(e.target.value)} />
            </HStack>
            <HStack>
              <Heading fontSize={16}>Provincia</Heading>
              <Input type="text" onChange={(e)=> setClientProvince(e.target.value)} />
            </HStack>
          </Stack>
          <Stack>
          </Stack>
        </HStack>

      </HStack>
      <Stack direction="row" justifyContent="space-around">
        <Link href="/">
          <a>
            <Button colorScheme="blue" px={5} size="lg"><Icon as={FaArrowLeft} me={3}/>Volver</Button>
          </a>
        </Link>
        <Link href="/checkout">
          <a>
            <Button colorScheme="green" px={10} size="lg" onClick={handleSubmit}>Siguiente</Button>
          </a>
        </Link>
      </Stack>
    </Stack>
  )
}
export default UserForm