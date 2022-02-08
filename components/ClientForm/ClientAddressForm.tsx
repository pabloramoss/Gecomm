import React, { useState } from 'react';
import { Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  HStack,
  Text
  } from '@chakra-ui/react'
import ClientFormInput from './ClientFormInput';

const ClientAddressForm = ({isShippingMethod, setIsShippingMethod, setClientInfo, clientInfo})=> {
  
  const shippingOn = ()=> {
    setIsShippingMethod(false)
    setShipping("envio")
    console.log(shipping)
  }
  const shippingOff = ()=> {
    setIsShippingMethod(true)
    setShipping("retiro")
    setClientInfo({...clientInfo,
      address: "",
      zipCode: "",
      city: "",
      province: "",
      shipping: false,
    })
    console.log(shipping)
  }
  const [shipping, setShipping] = useState("envio")
  
  console.log("hola", shipping)
  return(
    <>
      <Stack>
      <FormControl as='fieldset'>
      <FormLabel as='legend'>Tipo de envio</FormLabel>
      <RadioGroup defaultValue={shipping}>
        <HStack spacing='24px'>
          <Stack>
            <Radio onChange={()=>shippingOn()} value='envio'>Envio a domicilio</Radio>
            <Text color="gray.300" alignSelf="start" fontSize={12}>Acordar con el vendedor</Text>
          </Stack>
          <Stack>
            <Radio onChange={()=>shippingOff()} value='retiro'>Retiro en el local</Radio>
            <Text color="gray.300" alignSelf="end" fontSize={12}>(Santa Fe Capital)</Text>
          </Stack>
        </HStack>
      </RadioGroup>
    </FormControl>
        <ClientFormInput clientInfo={clientInfo} setClientInfo={setClientInfo} name="address" isDisabled={isShippingMethod} isRequired={true} type="text" label="Direccion"/>
        <ClientFormInput clientInfo={clientInfo} setClientInfo={setClientInfo} name="province" isDisabled={isShippingMethod} isRequired={true} type="text" label="Provincia"/>
        <ClientFormInput clientInfo={clientInfo} setClientInfo={setClientInfo} name="city" isDisabled={isShippingMethod} isRequired={true} type="text" label="Ciudad"/>
        <ClientFormInput clientInfo={clientInfo} setClientInfo={setClientInfo} name="zipCode" isDisabled={isShippingMethod} isRequired={true} type="number" label="Codigo postal"/>
      </Stack>
    </>
  )
}
export default ClientAddressForm