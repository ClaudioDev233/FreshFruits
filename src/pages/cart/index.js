import { useContext } from 'react'
import Menu from '../../components/menu'
import {CartContext} from '../../contexts/cartContext'
import { imgFruit } from '../../constants/index'

export default function Cart(){

    const { cart, context } = useContext(CartContext)


    return <>
    <Menu></Menu>
    <p>{context}</p>
    <div>{cart.map( fruit => {
        return  <> 
        <div>
        <p>{fruit.name}</p>
        {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
        <img className="fruit__image" src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
         : 
         <>
         </>
        
        }
        </div>
        </>
    
    }

    )}
    </div>
    </>
}