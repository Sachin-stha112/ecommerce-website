import { createContext, useState, useContext } from 'react'
import { getProductById } from '../data/products'

const CartContext = createContext(null)

export default function CartProvider({children})
{
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  )

  function saveCart(items)
  {
    localStorage.setItem("cart", JSON.stringify(items))
    setCartItems(items)
  }

  function addToCart(productId)
  {
    const existing = cartItems.find((item) => item.id === productId);
    if(existing)
    {
      const updatedCartItems = cartItems.map((item) => item.id === productId
      ? {id: productId, quantity: item.quantity + 1} : item )
      saveCart(updatedCartItems)
    }
    else
    {
      saveCart([...cartItems, {id : productId, quantity : 1}])
    }
  }

  function getCartItemsWithProducts() {
      return cartItems
        .map((item) => ({
          ...item,
          product: getProductById(item.id),
        }))
        .filter((item) => item.product);
    }
  
  function removeFromCart (productId)
  {
    const updated = cartItems.filter((item) => item.id !== productId)
    saveCart(updated)
  }
  function updateQuantity(productId, quantity)
  { 
    if(quantity <= 0)
    {
      removeFromCart(productId)
      return
    }
    const updated = cartItems.map((item) => item.id === productId ?
    {...item, quantity} : item)
    saveCart(updated)
  }
  function getCartTotal()
  {
    const total = cartItems.reduce((total,item) => 
    {
      const product = getProductById(item.id)
      return total +(product? product.price * item.quantity : 0)
    },0)
    return total
  }
  function clearCart()
  {
    saveCart([])
  }
  return (
    <CartContext.Provider value={{cartItems, addToCart, getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal, clearCart}} >
      {children}
    </CartContext.Provider>
  )

}
export function useCart()
{
  const context = useContext(CartContext);
  return context;
}
