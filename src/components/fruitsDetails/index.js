import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
export default function FruitDetails(){
    const [fruit, setFruit] = useState([])
    const params = useParams()

    useEffect(() => {
   
        const proxy = "https://secret-reef-88782.herokuapp.com/" // proxy para resolver problema de CORS 
        const url = "https://www.fruityvice.com/api/fruit"
      
        async function fetchFruit(){
          const response = await (await fetch(`${proxy}${url}/${params.id}`)).json()
          console.log(response)
          setFruit(response)
        }
        fetchFruit()
      },[])

    return <>
    <p>{fruit.name}</p>
    </>  
}