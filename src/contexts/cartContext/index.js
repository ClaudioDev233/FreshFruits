import { createContext } from "react";

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
   const coiso =  'Sou Contexto'

    return <CartContext.Provider
    value={{
        context : coiso
    }}
    >
        {children}
    </CartContext.Provider>
}