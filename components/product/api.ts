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
  product: async (id)=>{
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
    )
  },
  offline: async ()=>{
    return ([
      {
        id: '1',
        title: 'Fleje zuncho de acero inoxidalbe 3/4 x 0,7 x 30 mts',
        category: 'Industria',
        description: 'Masajeador',
        image: 'https://http2.mlstatic.com/D_Q_NP_932998-MLA47892207847_102021-AC.jpg',
        price: '5500'
      },
      {
        id: '2',
        title: 'Retención fibra óptica X 25',
        category: 'Industria',
        description: 'Por',
        image: 'https://http2.mlstatic.com/D_Q_NP_633745-MLA47891931183_102021-AC.jpg',
        price: '5000'
      },
      {
        id: '3',
        title: 'Cable fibra óptica drop 4 F Portante acero 1000 mts',
        category: 'Industria',
        description: '',
        image: 'https://http2.mlstatic.com/D_Q_NP_621244-MLA47916321987_102021-AC.jpg',
        price: '19000'
      },
      {
        id: '4',
        title: 'Hebilla acero inox 3/4 x 100',
        category: 'Industria',
        description: '',
        image: 'https://http2.mlstatic.com/D_Q_NP_775731-MLA47903324062_102021-AC.jpg',
        price: '5000'
      },
      {
        id: '5',
        title: 'Cierre empalme fibra óptica botella 48 fibras',
        category: 'Industria',
        description: '',
        image: 'https://http2.mlstatic.com/D_Q_NP_814490-MLA47911936550_102021-AC.jpg',
        price: '7500'
      }
    ])
  }
};