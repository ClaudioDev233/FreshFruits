import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imgFruit } from "../../constants";
import { FruitContainer, ImageContainer, DetailsContainer, H1 } from "./styles";

export default function FruitDetails() {
  const [fruit, setFruit] = useState([]);
  const [nutri, setNutri] = useState([]);
  const params = useParams(); // parametros para o ID dinamico de cada fruta

  useEffect(() => {
    const proxy = "https://secret-reef-88782.herokuapp.com/"; // proxy para resolver problema de CORS
    const url = "https://www.fruityvice.com/api/fruit";

    async function fetchFruit() {
      const response = await (
        await fetch(`${proxy}${url}/${params.id}`)
      ).json();
      setNutri(response.nutritions);
      setFruit(response);
    }
    fetchFruit();
  }, [params.id]);

  return (
    <>
      <FruitContainer>
        <ImageContainer>
          {imgFruit.filter((fruitImg) => fruit.name === fruitImg.nome)
            .length ? (
            <img
              className="fruit__image__details"
              src={
                imgFruit.filter((fruitImg) => fruit.name === fruitImg.nome)[0]
                  .imagem
              }
              alt={fruit.name}
            ></img>
          ) : (
            <></>
          )}
        </ImageContainer>
        <H1>{fruit.name}</H1>
        <DetailsContainer>
          <p>
            Calories: <span>{nutri.calories}</span>
          </p>
          <p>
            Carbohydrates: <span>{nutri.carbohydrates}</span>
          </p>
          <p>
            Fat: <span>{nutri.fat}</span>
          </p>
          <p>
            Protein: <span>{nutri.protein}</span>
          </p>
          <p>
            Sugar: <span>{nutri.sugar}</span>
          </p>
        </DetailsContainer>
      </FruitContainer>
    </>
  );
}
