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
  } 
}