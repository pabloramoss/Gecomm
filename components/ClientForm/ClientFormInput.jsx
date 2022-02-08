import React from 'react';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'

const ClientFormInput = ({type, label, isRequired, isDisabled, name, setClientInfo, clientInfo})=> {

  const handleInfoChange = e => {
    setClientInfo({...clientInfo, [e.target.name]:e.target.value})
  }

  return(
    <>
      <Box>
        <FormControl isRequired={isRequired} isDisabled={isDisabled}>
          <FormLabel color="gray.500" fontWeight="regular">{label}</FormLabel>
          <Input
            type={type}
            onChange={(e)=>setClientInfo({ ...clientInfo, [name]:e.target.value})}
            name={name}
            value={clientInfo[name]}
          />
        </FormControl>
      </Box>
    </>
  )
}
export default ClientFormInput