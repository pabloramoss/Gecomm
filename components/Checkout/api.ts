import axios from "axios"

export default {
  list: async () => {
    return axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(
      response => {
        const dolarPrices = response.data
        return dolarPrices
      }
    )
  },
   dolarBlue: async () => {
    return axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(
      response => {
        const dolarBluePrice = response.data[1].casa.venta
        return dolarBluePrice
      }
    )
  },
  message: async (chat_id, text) =>{
    return axios.post(`https://api.telegram.org/bot5165116240:AAFAI03uGZhb2C7Wg6TGkdhQ6Jg4DMJauSo/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`)
  },
}