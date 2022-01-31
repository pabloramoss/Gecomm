import React from 'react';
import api from "../../components/product/api"
import {GetStaticProps, GetStaticPaths} from "next";
import { useRouter } from 'next/router';

export default function ProductPage({products}) {
  console.log("los productos son: ", products)
  const route = useRouter()
  const {slug} = route.query
  console.log(route)
  console.log(slug)

  return(
    <div>
      Producto con indice {slug} tiene id: {products[slug].id}
      Este producto es {products[slug].title}

    </div>
  )
}

export async function getStaticPaths() {
  // Hacer fetch al endpoint que contiene los `products`
  const products = await api.list();

  // Obtener rutas a pre-renderizar basado en el `id` de los products
  const rutas = products.map((product) => `/product/${product.id}`);

  return { paths: rutas, fallback: false };
	}

export const getStaticProps = async () => {
  const products = await api.product();
  return {
    props: {
      products,
    },
  };
}; 