import { useContext } from 'react'
import Menu from '../../components/menu'
import {CartContext} from '../../contexts/cartContext'

export default function Cart(){

    const { cart, context } = useContext(CartContext)


    return <>
    <Menu></Menu>
    <p>{context}</p>
    <div>{cart.map( fruit => {
        return <p>(fruit.name)</p>}

    )}
    </div>
    </>
}