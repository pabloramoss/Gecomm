import React from 'react';
import { Stack} from '@chakra-ui/react'
import ClientFormInput from './ClientFormInput';

const ClientInfoForm = ()=> {

  return(
    <>
      <Stack px={10}>
          <ClientFormInput isDisabled={false} name="name" isRequired={true} type="text" label="Nombre"/>
          <ClientFormInput isDisabled={false} name="company" isRequired={true} type="text" label="Empresa"/>
          <ClientFormInput isDisabled={false} name="cuit" isRequired={true} type="number" label="Cuit"/>
          <ClientFormInput isDisabled={false} name="email" isRequired={true} type="email" label="Email"/>
          <ClientFormInput isDisabled={false} name="whatsapp" isRequired={true} type="number" label="Whatsapp"/>
        </Stack>
    </>
  )
}
export default ClientInfoForm