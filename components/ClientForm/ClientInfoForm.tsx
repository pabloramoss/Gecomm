import React from 'react';
import { Stack} from '@chakra-ui/react'
import ClientFormInput from './ClientFormInput';

const ClientInfoForm = ({addClientInfo, clientInfo})=> {

  return(
    <>
      <Stack px={10}>
          <ClientFormInput clientInfo={clientInfo} addClientInfo={addClientInfo} isDisabled={false} name="name" isRequired={true} type="text" label="Nombre"/>
          <ClientFormInput clientInfo={clientInfo} addClientInfo={addClientInfo} isDisabled={false} name="company" isRequired={true} type="text" label="Empresa"/>
          <ClientFormInput clientInfo={clientInfo} addClientInfo={addClientInfo} isDisabled={false} name="cuit" isRequired={true} type="number" label="Cuit"/>
          <ClientFormInput clientInfo={clientInfo} addClientInfo={addClientInfo} isDisabled={false} name="email" isRequired={true} type="email" label="Email"/>
          <ClientFormInput clientInfo={clientInfo} addClientInfo={addClientInfo} isDisabled={false} name="whatsapp" isRequired={true} type="number" label="Whatsapp"/>
        </Stack>
    </>
  )
}
export default ClientInfoForm