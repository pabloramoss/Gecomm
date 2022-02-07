import React from 'react';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'

const ClientFormInput = ({type, label, isRequired, isDisabled, name, addClientInfo, clientInfo})=> {

  const handleInfoChange = e => {
    addClientInfo(clientInfo, name, e.target.value)
  }

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