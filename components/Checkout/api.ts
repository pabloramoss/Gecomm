import axios from "axios"

const urlPurchaseDB = process.env.URL_SHEET

export default {
   dolarBlue: async () => {
    return axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(
      response => {
        const dolarBluePrice = response.data[1].casa.venta
        return dolarBluePrice
      }
    ).catch(error => console.log(error))
  },
  message: async (chat_id, text) =>{
    return axios.post(`https://api.telegram.org/bot5165116240:AAFAI03uGZhb2C7Wg6TGkdhQ6Jg4DMJauSo/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`).catch(error => console.log(error))
  },
  postDB: async (clientInfo, uniqueID, transactionDate)=>{
    const objectDB = {
      "id": transactionDate,
      "fecha": uniqueID,
      "cliente": clientInfo.name, 
      "empresa": clientInfo.company, 
      "cuit": clientInfo.cuit,
      "email": clientInfo.email,
      "whatsapp": clientInfo.whatsapp,
      "provincia": clientInfo.province,
      "ciudad": clientInfo.city,
      "codigo postal": clientInfo.zipCode, 
      "direccion": clientInfo.address
      }
    return axios.post(urlPurchaseDB, objectDB)
  }
}  