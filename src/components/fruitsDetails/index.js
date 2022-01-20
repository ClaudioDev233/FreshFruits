import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import { imgFruit } from "../../constants"

export default function FruitDetails(){
    const [fruit, setFruit] = useState([])
    const [nutri, setNutri] = useState([])
    const params = useParams()

    useEffect(() => {
   
        const proxy = "https://secret-reef-88782.herokuapp.com/" // proxy para resolver problema de CORS 
        const url = "https://www.fruityvice.com/api/fruit"
      
        async function fetchFruit(){
          const response = await (await fetch(`${proxy}${url}/${params.id}`)).json()
          setNutri(response.nutritions)
          setFruit(response)
            console.log(response.nutritions)
        }
        fetchFruit()
        
      },[])

    return <>
    {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
      <img className="fruit__image" src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
      : 
      <>
      </>}
      
    <p>{fruit.name}</p>
    <p>Carbo:{nutri.carbohydrates}</p>
    <p>Proteina:{nutri.protein}</p>
    <p>Gordura:{nutri.fat}</p>
    <p>Calorias:{nutri.calories}</p>
    <p>Açucr:{nutri.sugar}</p>
    
    </>  
}