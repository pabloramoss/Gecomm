
//ejemplo jonircha ThemeContext.jsx
import { createContext, useState } from "react"

const ProductContext = createContext()
const initialProduct = []

const ProductProvider = ({children}) =>{
  const [cart, setCart] = useState(initialProduct)
  const [productOnHover, setProductOnHover] = useState()

  const handleAddToCart = (clickedItem)=>{
    setCart(prev=> {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.title === clickedItem.title)
      if(isItemInCart) {
        return prev.map(item => 
          item.title === clickedItem.title
          ? { ...item, amount: item.amount + 1}
          : item
        )
      }
      //First time the item is added
      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = (title)=>{
    setCart(prev => (
      prev.reduce((counter, item)=>{
        if (item.title === title) {
          if (item.amount === 1) return counter;
          return [...counter, {...item, amount: item.amount -1}];
        }else{
          return [...counter, item]
        }
      },[])
    ))
  }

    // Agroup all products by category
    const productsGrouping = products.reduce((a, {
      category, title, price, iva, image, description,
    }) => {
      const foundCategory = a.find(({ productCategory }) => productCategory === category);
      if (foundCategory) {
        foundCategory.productsGroup.push({
          title, price, iva, image, description,
        });
      } else {
        a.push({
          productCategory: category,
          productsGroup: [{
            title, price, iva, image, description,
          }],
        });
      }
      return a;
    }, []);
  
  const data = {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart,
    productOnHover,
    setProductOnHover,
  }
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  )
}

export {ProductProvider}
export default ProductContext