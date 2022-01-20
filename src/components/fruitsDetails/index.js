import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
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
    <p>{fruit.name}</p>
    <p>Carbo:{nutri.carbohydrates}</p>
    <p>Proteina:{nutri.protein}</p>
    <p>Gordura:{nutri.fat}</p>
    <p>Calorias:{nutri.calories}</p>
    <p>Açucr:{nutri.sugar}</p>
    
    </>  
}