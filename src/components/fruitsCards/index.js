import {useState, useEffect, useContext, Children} from 'react';

import { imgFruit } from '../../constants';

import { CartContext } from '../../contexts/cartContext'

import { Link } from 'react-router-dom'

import { trackPromise , usePromiseTracker } from 'react-promise-tracker';

import Loading from '../loading';

import { FruitCard } from "./styles"

export default function FruitsCards() {

  const { promiseInProgress } = usePromiseTracker()

const [fruits, setFruit] = useState([])


const {addNewFruit} = useContext(CartContext)

useEffect(() => {
   
  const proxy = "https://secret-reef-88782.herokuapp.com/" // proxy para resolver problema de CORS 
  const url = "https://www.fruityvice.com/api/fruit"

  async function fetchFruit(){
    const data = await fetch(`${proxy}${url}/all`)
    const response = await data.json()
    console.log(data)
    setFruit(response)
    
  }
  trackPromise(
  fetchFruit())
},[])

  /* condição pra loading usando react-promise-tracker */
  return   <>
   {promiseInProgress === true ? <Loading></Loading> : <></>} 

    {Children.toArray(fruits.map( fruit => {
      return <>
      <FruitCard>
      {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
      <img src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
      : 
      <>
      </>
      }
      <p>{fruit.name}</p>
      <p>Calorias: {fruit.nutritions.calories}</p> 

      <Link to={`./details/${fruit.id}`}><button> + </button></Link>
      <button onClick={() => {addNewFruit(fruit)}}>Adicionar ao Carrinho</button>
      </FruitCard>
      </>
    }))}
  </>
}



