import { Children, useContext } from 'react'
import Menu from '../../components/menu'
import {CartContext} from '../../contexts/cartContext'
import { imgFruit } from '../../constants/index'
import { Counter } from '../../reducer'

export default function Cart(){

    const { cart, context, removeFruit } = useContext(CartContext)


    return <>
    <Menu></Menu>
    <p>Quantidade de Itens no carrinho: {context}</p>
    <div>{Children.toArray(cart.map( fruit => {
        return  <> 
        <div>  
        <p>{fruit.name}</p>
        {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
        <img className="fruit__image" src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
         : 
         <>
         </>
        
        }
        <Counter></Counter>
        <button onClick={() => {removeFruit(fruit.id)}}>Remover do Carrinho</button>
        </div>
        </>
    
    }

    ))}
    </div>
    </>
}