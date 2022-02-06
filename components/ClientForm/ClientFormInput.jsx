import React, {useState} from 'react';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'
import useSessionStorage from '../useSessionStorage';

const ClientFormInput = ({type, label, isRequired, isDisabled, name})=> {
  const [clientInfo, setClientInfo] = useSessionStorage(name, "")

  const handleInfoChange = e => setClientInfo(e.target.value)

  return(
    <>
      <Box>
        <FormControl isRequired={isRequired} isDisabled={isDisabled}>
          <FormLabel>{label}</FormLabel>
          <Input
            type={type}
            value={clientInfo[name]}
            onChange={handleInfoChange}
            name={name}
          />
        </FormControl>
      </Box>
    </>
  )
}
export default ClientFormInput