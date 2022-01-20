import { Children, useContext } from 'react'
import Menu from '../../components/menu'
import {CartContext} from '../../contexts/cartContext'
import { imgFruit } from '../../constants/index'
import Container from "../../components/container";


export default function Cart(){

    const { cart, context,clearCart, removeFruit, amount, addAmount} = useContext(CartContext)


    return <>
    <Menu></Menu>
    <Container>
    <p>Quantidade de Itens no carrinho: {context}</p>
    <button onClick={() =>{clearCart()}}>Limpar Carrinho</button>
    <div>{Children.toArray(cart.map( fruit => {
        return  <> 
        <div>  
        <p>{fruit.name}</p>
        <p>{amount}</p>
       
        {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
        <img className="fruit__image" src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
         : 
         <>
         </>
        
        }
        
        <button onClick={() => {removeFruit(fruit.id)}}>Remover do Carrinho</button>
        <button onClick={() => {addAmount(fruit)}}>Add Qnt Carrinho</button>
        </div>
        </>
    
    }

    ))}
    </div>
    </Container>
    </>
}