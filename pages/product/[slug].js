import React from 'react';
import ProductCard from '../../components/product/ProductCard';
import api from "../components/product/api";
import {GetStaticPaths} from "next";


export default function ProductPage({pathsId}) {

  return(
    <div>
      hola mundo
    </div>
  )
}
export async function getStaticPaths(){
  const res = await api.list();
  const products = await res.json()
  const pathsId = products.map((product)=> product.id)
  return {
    pathsId,
    fallback: false
  }
}
