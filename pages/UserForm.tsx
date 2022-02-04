import React, { useState } from 'react';
import { Button, Grid, GridItem, Heading, Icon, Input, Link, Stack } from '@chakra-ui/react';
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
  })

  const [clientName, setClientName] = useState("")
  const [clientCompany, setClientCompany] = useState("")
  const [clientCuit, setClientCuit] = useState("")
  const [clientWhatsapp, setClientWhatsapp] = useState("")
  const [clientEmail, setClientEmail] = useState("")

  const handleSubmit = ()=>{
    setUserInfo({
      name: clientName,
      company: clientCompany,
      cuit: clientCuit,
      whatsapp: clientWhatsapp,
      email: clientEmail,
    })

  }


  return(
    <Stack alignItems="center">
      <Stack>
        <Heading fontSize={25}>Datos del cliente</Heading>
        <Stack direction="row">
          <Heading fontSize={20}>Nombre</Heading>
          <Input type="text" placeholder='Nombre y apellido' onChange={(e)=> setClientName(e.target.value)} />
        </Stack>
        <Stack direction="row">
          <Heading fontSize={20}>Empresa</Heading>
          <Input type="text" placeholder='Empresa' onChange={(e)=> setClientCompany(e.target.value)} />
        </Stack>
        <Stack direction="row">
          <Heading fontSize={20}>Cuit</Heading>
          <Input type="number" placeholder='Cuit' onChange={(e)=> setClientCuit(e.target.value)} />
        </Stack>
        <Stack direction="row">
          <Heading fontSize={20}>Whatsapp</Heading>
          <Input type="tel" placeholder='Whatsapp' onChange={(e)=> setClientWhatsapp(e.target.value)} />
        </Stack>
        <Stack direction="row">
          <Heading fontSize={20}>Email</Heading>
          <Input type="email" placeholder='Email' onChange={(e)=> setClientEmail(e.target.value)} />
        </Stack>
      </Stack>
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