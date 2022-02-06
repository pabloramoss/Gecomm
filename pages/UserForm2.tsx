import React, { useEffect } from 'react';
import { Stack, Button, HStack, Link} from '@chakra-ui/react'
import ClientInfoForm from '../components/ClientForm/ClientInfoForm';
import ClientAddress from '../components/ClientForm/ClientAddress';
const UserForm = ()=> {

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log("me estoy cagando")
    location.assign("localhost:3000/checkout2")
    //location.assign("https://localhost:3000/checkout")
		//guardar en sessionStorage una variable shipping boolean, true => se guardan los datos del address, false => no se guardan estos datos y en checkout se imprime retiro en el local en lugar del address
  }

  return(
    <Stack align="center">
        <form id='form' onSubmit={handleSubmit}>
          <Stack direction="row" justifyContent="center">
            <ClientInfoForm />
            <ClientAddress />
          </Stack>
        </form>
      <HStack>
        <Button width={100} colorScheme="blue">Atras</Button>
          <Button colorScheme="green" px={10} size="lg" type='submit' onClick={handleSubmit}>Siguiente</Button>
{/*         <Button type='submit' form='form' width={100} colorScheme="green">Siguiente</Button>
 */}      </HStack>
    </Stack>
  )
}
export default UserForm