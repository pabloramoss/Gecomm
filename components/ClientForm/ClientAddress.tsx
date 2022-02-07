import React from 'react';
import { Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  HStack,
  VStack,
  Text
  } from '@chakra-ui/react'
import ClientAddressForm from './ClientFormInput';

const ClientAddress = ({isShippingMethod, setIsShippingMethod, addClientInfo, clientInfo})=> {

  return(
    <>
      <Stack>
      <FormControl as='fieldset'>
      <FormLabel as='legend'>Tipo de envio</FormLabel>
      <RadioGroup defaultValue='envio'>
        <HStack spacing='24px'>
          <Stack>
            <Radio onChange={()=>setIsShippingMethod(false)} value='envio'>Envio a domicilio</Radio>
            <Text color="gray.300" alignSelf="start" fontSize={12}>Acordar con el vendedor</Text>

          </Stack>
          <Stack>
            <Radio onChange={()=>setIsShippingMethod(true)} value='retiro'>Retiro en el local</Radio>
            <Text color="gray.300" alignSelf="end" fontSize={12}>(Santa Fe Capital)</Text>
          </Stack>
        </HStack>
      </RadioGroup>
    </FormControl>
        <ClientAddressForm clientInfo={clientInfo} addClientInfo={addClientInfo} name="address" isDisabled={isShippingMethod} isRequired={true} type="text" label="Direccion"/>
        <ClientAddressForm clientInfo={clientInfo} addClientInfo={addClientInfo} name="province" isDisabled={isShippingMethod} isRequired={true} type="text" label="Provincia"/>
        <ClientAddressForm clientInfo={clientInfo} addClientInfo={addClientInfo} name="city" isDisabled={isShippingMethod} isRequired={true} type="text" label="Ciudad"/>
        <ClientAddressForm clientInfo={clientInfo} addClientInfo={addClientInfo} name="zipCode" isDisabled={isShippingMethod} isRequired={true} type="number" label="Codigo postal"/>
      </Stack>
    </>
  )
}
export default ClientAddress