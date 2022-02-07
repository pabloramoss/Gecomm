import React from 'react';
import { Stack, Button, HStack } from '@chakra-ui/react'
import ClientInfoForm from '../components/ClientForm/ClientInfoForm';
import ClientAddress from '../components/ClientForm/ClientAddress';

const UserForm = ({isShippingMethod, setIsShippingMethod, addClientInfo, clientInfo})=> {

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log("me estoy cagando")
    location.assign("localhost:3000/checkout2")
  }

  return(
    <Stack align="center">
        <form id='form' onSubmit={handleSubmit}>
          <Stack direction="row" justifyContent="center">
            <ClientInfoForm addClientInfo={addClientInfo}/>
            <ClientAddress
            isShippingMethod={isShippingMethod}
            setIsShippingMethod={setIsShippingMethod}
            addClientInfo={addClientInfo}
            clientInfo={clientInfo}
            />
          </Stack>
        </form>
      <HStack>
        <Button width={100} colorScheme="blue">Atras</Button>
        <Button type='submit' form='form' width={100} colorScheme="green">Siguiente</Button>
      </HStack>
    </Stack>
  )
}
export default UserForm