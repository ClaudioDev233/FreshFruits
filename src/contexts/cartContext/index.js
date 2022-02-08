import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // adiciona uma nova fruta ao carrinho
  function handleAddNewFruit(fruit) {
    const newFruit = {
      ...fruit,
      amount: 1,
    };

    const check = checkIfFruitIsOnCart(newFruit.name);

    if (check === undefined) {
      setCart([...cart, newFruit]);
      toast.success(`🛒 ${newFruit.name} added to cart!`, {
        autoClose: 2000,
      });
    } else {
      toast.error(`🛒 ${newFruit.name} already added to cart!`, {
        autoClose: 2000,
      });
    }
  }

  //checa se a fruta está no carrinho para não adiciona-la novamente
  function checkIfFruitIsOnCart(fruit) {
    const fruitFind = cart.find((item) => item.name === fruit);
    return fruitFind;
  }

  //remove uma fruta do carrinho
  function handleRemoveFruit(id) {
    const fruitFiltered = cart.filter((item) => {
      if (item.id === id) {
        toast.success(`🧹 ${item.name} Removed`, {
          autoClose: 2000,
        });
        return false; //remove fruta do carrinho
      } else {
        return true; //fruta continua no carrinho
      }
    });
    setCart(fruitFiltered);
  }

  // limpa todo o carrinho
  function handleClearCart() {
    toast.success("✨ Cart Cleared", {
      autoClose: 2000,
    });
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartAmount: cart.length,
        cart: cart,
        setToCart: setCart,
        addNewFruit: handleAddNewFruit,
        removeFruit: handleRemoveFruit,
        clearCart: handleClearCart,

        checkFruit: checkIfFruitIsOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
