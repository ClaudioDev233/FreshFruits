import {useState, useEffect, useContext} from 'react';

import { imgFruit } from '../../constants';

import { CartContext } from '../../contexts/cartContext'

export default function FruitsCards() {

const [fruits, setFruit] = useState([])  


const { context, addFruit, removeFruit, cartValue } = useContext(CartContext)

useEffect(() => {
   
  const proxy = "https://secret-reef-88782.herokuapp.com/" // proxy para resolver problema de CORS 
  const url = "https://www.fruityvice.com/api/fruit"

  async function fetchFruit(){
    const response = await (await fetch(`${proxy}${url}/all`)).json()
    setFruit(response)
  }
  fetchFruit()
},[])


  return   <>
    {console.log(cartValue)}
    {fruits.map( fruit => {
      return <>
      <div> <p> Quantidade no carrinho : {context}</p>
      <p>{fruit.name}</p>
      {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
      <img className="fruit__image" src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
      : 
      <>
      </>
        
      }
      <button onClick={() => {addFruit(fruit)}}>Adicionar ao Carrinho</button>
      <button onClick={() => {removeFruit(fruit.id)}}>Remover do Carrinho</button>
      </div>
      </>
    })} 
  </>
}



