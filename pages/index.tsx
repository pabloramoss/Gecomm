import React from 'react'
import {GetStaticProps} from 'next'
import {Product} from '../product/types'
import api from '../product/api';

interface Props {
  products: Product[];
}

const IndexRoute: React.FC<Props> = ({children})=>{
  return <div>{`<IndexRoute />`}</div>;
}

export const getStaticProps: GetStaticProps = async ()=> {
  const products = await api.list();
  return {
    props: {
      products,
    },
  };
}

export default IndexRoute;
