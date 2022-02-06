import React, {useEffect, useState} from 'react';
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
import useSessionStorage from '../useSessionStorage';


const ClientAddress = ()=> {
  const [shippingFormOn, setShippingFormOn] = useState(false)
  const [shippingMethod, setShipingMethod] = useSessionStorage("shippingMethod", "false")
  const handleChangeShipping = (ship)=> {
    setShipingMethod(!ship)
    setShippingFormOn(ship)
  }
  useEffect(()=>setShipingMethod(true))

  const handleSubmit = (e)=>{
    e.preventDefault()
    location.assign("http://xvideos.com")
    //redirigir a checkout
    //guardar en sessionStorage una variable shipping boolean, true => se guardan los datos del address, false => no se guardan estos datos y en checkout se imprime retiro en el local en lugar del address
  }

  return(
    <>
      <Stack>
      <FormControl as='fieldset'>
      <FormLabel as='legend'>Tipo de envio</FormLabel>
      <RadioGroup defaultValue='envio'>
        <HStack spacing='24px'>
          <Stack>
            <Radio onChange={()=>handleChangeShipping(false)} value='envio'>Envio a domicilio</Radio>
            <Text color="gray.300" alignSelf="start" fontSize={12}>Acordar con el vendedor</Text>

          </Stack>
          <Stack>
            <Radio onChange={()=>handleChangeShipping(true)} value='retiro'>Retiro en el local</Radio>
            <Text color="gray.300" alignSelf="end" fontSize={12}>(Santa Fe Capital)</Text>
          </Stack>
        </HStack>
      </RadioGroup>
    </FormControl>
        <ClientAddressForm name="address" isDisabled={shippingFormOn} isRequired={true} type="text" label="Direccion"/>
        <ClientAddressForm name="province" isDisabled={shippingFormOn} isRequired={true} type="text" label="Provincia"/>
        <ClientAddressForm name="city" isDisabled={shippingFormOn} isRequired={true} type="text" label="Ciudad"/>
        <ClientAddressForm name="zipCode" isDisabled={shippingFormOn} isRequired={true} type="number" label="Codigo postal"/>
      </Stack>
    </>
  )
}
export default ClientAddress