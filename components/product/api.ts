import axios from "axios";
import { Product } from "./types";
import Papa from "papaparse";

export default {
  list: async (): Promise<Product[]> =>{
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vS1d8WKiiCr2qDLPFdN0avYUcv0orfe0uWmP0AktF9zi_impqE_cE912Ee207FZJ8Rhbg9V8tW80Kos/pub?output=csv", {
      responseType: "blob"
    }).then(
      response =>{
        return new Promise<Product[]>((resolve, reject)=>{
          Papa.parse(response.data, {
            header: true,
            complete: results => {
              return resolve(results.data as Product[]);
            },
            error: (error)=> {
              return reject(error.message);
            }
          });
        })
      }
    );
  },
};