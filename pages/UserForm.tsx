import React from 'react';
import { Stack, Button, HStack } from '@chakra-ui/react'
import ClientInfoForm from '../components/ClientForm/ClientInfoForm';
import ClientAddressForm from '../components/ClientForm/ClientAddressForm';
import {useRouter} from "next/router"

const UserForm = ({setClientInfo, clientInfo})=> {

  const router = useRouter()
  const handleSubmit= (e)=>{
    e.preventDefault()
    router.push("/checkout")
  }

  return(
    <Stack alignItems="center" mt={20}>
        <form id='form' onSubmit={handleSubmit}>
          <Stack borderRadius={20} p={10} direction="row" justifyContent="center" bg="gray.300">
            <ClientInfoForm clientInfo={clientInfo} setClientInfo={setClientInfo}/>
            <ClientAddressForm
            setClientInfo={setClientInfo}
            clientInfo={clientInfo}
            />
          </Stack>
        </form>
      <HStack>
        <Button width={100} onClick={()=>router.push("/")} colorScheme="blue">Atras</Button>
        <Button type='submit' onSubmit={()=>handleSubmit(e)} form='form' width={100} colorScheme="green">Siguiente</Button>
      </HStack>
    </Stack>
  )
}
export default UserForm