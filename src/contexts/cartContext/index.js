import { createContext, useState } from "react";

/* 
  COMO CRIAR UM CONTEXTO 
  1 - Importar createContext do react
  2 - atribui createContext para uma variável
    Ex: export const CartContext = createContext([]);
  3 - Criar o Provider
  4 - Importar o Provider no App.js
  5 - Consumir o contexto usando o useContex 
  ...
*/

export const CartContext = createContext([]);

export function CartProvider({children}){
   

    const [cart, setCart] = useState([])
    const cartValue = console.log(cart)

   function handleAddFruit(fruit){
        setCart([...cart, fruit])
   }

   function handleRemoveFruit(id){
       const fruitFiltered = cart.filter( item =>{
           if(item.id === id){
               return false   //remove fruta do carrinho
           } else {
            return true  //fruta continua no carrinho
           }
       })
       setCart(fruitFiltered)
   }

    return <CartContext.Provider
    value={{
        context : cart.length,
        cartValue: cartValue,
        addFruit: handleAddFruit,
        removeFruit: handleRemoveFruit
    }}
    >
        {children}
    </CartContext.Provider>
}