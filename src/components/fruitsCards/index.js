import { useState, useEffect, useContext, Children } from "react";
import { Link } from "react-router-dom";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

import { CartContext } from "../../contexts/cartContext";

import { imgFruit } from "../../constants";

import Loading from "../loading";

import {
  FruitCard,
  ButtonInfo,
  FruitBasket,
  Fruits,
  FruitPage,
  ButtonBox,
} from "./styles";

export default function FruitsCards() {
  const { promiseInProgress } = usePromiseTracker();

  const [fruits, setFruit] = useState([]);

  const { addNewFruit } = useContext(CartContext);

  useEffect(() => {
    const proxy = "https://secret-reef-88782.herokuapp.com/"; // proxy para resolver problema de CORS
    const url = "https://www.fruityvice.com/api/fruit";

    async function fetchFruit() {
      const data = await fetch(`${proxy}${url}/all`);
      const response = await data.json();
      setFruit(response);
    }
    //Encapsulamento da response para o loading ocorrer ou não
    trackPromise(fetchFruit());
  }, []);

  //condição pra loading usando react-promise-tracker
  return (
    <>
      <FruitPage>
        <Fruits>Featured Products</Fruits>
        {promiseInProgress === true ? <Loading></Loading> : <></>}
        <FruitBasket>
          {Children.toArray(
            fruits.map((fruit) => {
              return (
                <>
                  <FruitCard>
                    {imgFruit.filter((fruitImg) => fruit.name === fruitImg.nome)
                      .length ? (
                      <img
                        src={
                          imgFruit.filter(
                            (fruitImg) => fruit.name === fruitImg.nome
                          )[0].imagem
                        }
                        alt={fruit.name}
                      ></img>
                    ) : (
                      <></>
                    )}
                    <h2>{fruit.name}</h2>
                    <h3>{fruit.nutritions.calories} Cal</h3>
                    <ButtonBox>
                      <ButtonInfo
                        title="Add to Cart"
                        onClick={() => {
                          addNewFruit(fruit);
                        }}
                      >
                        Add To Cart
                      </ButtonInfo>
                      <Link to={`./details/${fruit.id}`}>
                        <ButtonInfo title="Nutritional Info">?</ButtonInfo>
                      </Link>
                    </ButtonBox>
                  </FruitCard>
                </>
              );
            })
          )}
        </FruitBasket>
      </FruitPage>
    </>
  );
}
