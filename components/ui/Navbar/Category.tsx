import React from 'react';
import {Link} from "@chakra-ui/react"

interface Props {}

const Category: React.FC<Props> = ({category})=> {

  return(
    <Link>
      {category}
    </Link>
  )
}
export default Category