
//ejemplo jonircha ThemeContext.jsx
import { createContext, useState } from "react"

const ClientContext = createContext()
const initialClient = {
  name: "",
  company: "",
  cuit: "",
  whatsapp: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  province: "",
  shipping: true,
}


const ClientProvider = ({children}) =>{
  const [clientInfo, setClientInfo] = useState(initialClient)
  
  const data = {
    clientInfo,
    setClientInfo
  }
  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  )
}

export {ClientProvider}
export default ClientContext