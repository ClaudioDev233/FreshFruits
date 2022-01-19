import { createContext, useState} from "react";

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
    const [fruitQnt, setFruitQnt ] = useState(1)
    /* const cartValue = console.log(cart) */


    // adiciona uma nova fruta ao carrinho
   function handleAddNewFruit(fruit){
       const check = checkIfFruitIsOnCart(fruit.name)
      if(check === undefined){
          setCart([...cart, fruit])
      } else {
         alert('já tem no carrinho')
         
      }
   }

//muda a quantidade dessa fruta no carrinho
   function handleAddFruit(fruit){
       setFruitQnt(fruitQnt + 1 )
   }

   //checa se a fruta está no carrinho para não adiciona-la novamente refatorar 
  function checkIfFruitIsOnCart(fruit){
       const fruitFind = cart.find(item => item.name === fruit)
       console.log(fruitFind)
       return fruitFind     
  }

    //remove a fruta do carrinho
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
        cart: cart,
        addNewFruit: handleAddNewFruit,
        removeFruit: handleRemoveFruit,

        addFruit: handleAddFruit,
        fruitQnt: fruitQnt,

        checkFruit: checkIfFruitIsOnCart
        /* cartValue: cartValue, */
    }}
    >
        {children}
    </CartContext.Provider>
}