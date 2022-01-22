import { Children, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { imgFruit } from "../../constants/index";
import {
  ButtonsAddRemove,
  CartDescription,
  CartDiv,
  CartTableDiv,
  CartImage,
  Table,
  TBody,
  Th,
  QuantitySpan,
} from "./styles";

export default function CartTable() {
  const { cart, cartAmount, clearCart, removeFruit, setToCart } =
    useContext(CartContext);

  //Altera a quantitade de itens no carrinho
  function handleAddAmount(fruit) {
    cart.forEach((item) => {
      if (item.name === fruit.name) {
        fruit.amount += 1;
      }
    });
    setToCart([...cart]);
  }

  //Altera a quantitade de itens no carrinho
  function handleRemoveAmount(fruit) {
    cart.forEach((item) => {
      if (item.name === fruit.name) {
        if (fruit.amount > 1) {
          fruit.amount -= 1;
        }
      }
    });
    setToCart([...cart]);
  }

  return (
    <>
      <CartDiv>
        <CartDescription>
          <h1>Cart</h1>
          <h2>Items in cart: {cartAmount}</h2>
          <ButtonsAddRemove
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </ButtonsAddRemove>
        </CartDescription>
        <CartTableDiv>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Product</Th>
                <Th>Qnt</Th>
                <Th></Th>
              </tr>
            </thead>
            <TBody>
              {Children.toArray(
                cart.map((fruit) => {
                  return (
                    <>
                      <tr>
                        {imgFruit.filter(
                          (fruitImg) => fruit.name === fruitImg.nome
                        ).length ? (
                          <td>
                            <CartImage
                              src={
                                imgFruit.filter(
                                  (fruitImg) => fruit.name === fruitImg.nome
                                )[0].imagem
                              }
                              alt={fruit.name}
                            ></CartImage>
                          </td>
                        ) : (
                          <></>
                        )}
                        <td>{fruit.name}</td>
                        <td>
                          <ButtonsAddRemove
                            onClick={() => {
                              handleAddAmount(fruit);
                            }}
                          >
                            +
                          </ButtonsAddRemove>
                          <QuantitySpan>{fruit.amount}</QuantitySpan>
                          <ButtonsAddRemove
                            onClick={() => {
                              handleRemoveAmount(fruit);
                            }}
                          >
                            -
                          </ButtonsAddRemove>
                        </td>
                        <td>
                          <ButtonsAddRemove
                            onClick={() => {
                              removeFruit(fruit.id);
                            }}
                          >
                            X
                          </ButtonsAddRemove>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </TBody>
          </Table>
        </CartTableDiv>
      </CartDiv>
    </>
  );
}
