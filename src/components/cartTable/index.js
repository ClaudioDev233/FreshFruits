import { Children, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { imgFruit } from "../../constants/index";

export default function CartTable() {
  const { cart, context, clearCart, removeFruit, settCart } =
    useContext(CartContext);

  function handleAddAmount(fruit) {
    cart.forEach((item) => {
      if (item.name === fruit.name) {
        fruit.amount += 1;
      }
    });
    settCart([...cart]);
  }

  function handleRemoveAmount(fruit) {
    cart.forEach((item) => {
      if (item.name === fruit.name) {
        if (fruit.amount > 1) {
          fruit.amount -= 1;
        }
      }
    });
    settCart([...cart]);
  }

  return (
    <>
      <div className="DivDeTudo">
        <div className="DivLimpaCarro">
          <p>Quantidade de Itens no carrinho: {context}</p>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Limpar Carrinho
          </button>
        </div>
        <div className="DivTable">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Qnt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Children.toArray(
                cart.map((fruit) => {
                  return (
                    <>
                      <tr>
                        {imgFruit.filter(
                          (fruitImg) => fruit.name === fruitImg.nome
                        ).length ? (
                          <td>
                            <img
                              className="cartPhoto"
                              src={
                                imgFruit.filter(
                                  (fruitImg) => fruit.name === fruitImg.nome
                                )[0].imagem
                              }
                              alt={fruit.name}
                            ></img>
                          </td>
                        ) : (
                          <></>
                        )}
                        <td>{fruit.name}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleAddAmount(fruit);
                            }}
                          >
                            +
                          </button>
                          <span>{fruit.amount}</span>
                          <button
                            onClick={() => {
                              handleRemoveAmount(fruit);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              removeFruit(fruit.id);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
