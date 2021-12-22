/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import {Product} from './types'


export default {
  list: async (): Promise<Product[]> => {
    return axios.get(`https://docs.google.com/spreadsheets/d/e/2PACX-1vS1d8WKiiCr2qDLPFdN0avYUcv0orfe0uWmP0AktF9zi_impqE_cE912Ee207FZJ8Rhbg9V8tW80Kos/pub?output=csv`, {responseType: 'blob'}).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
}
