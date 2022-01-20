import { Link } from 'react-router-dom'
import {NavMenu} from './styles'
import { FaLemon } from 'react-icons/fa';

export default function Menu(){

    return <>
        <NavMenu>
           <span><FaLemon color="green"></FaLemon>FRUITFIND</span>
           <Link to={"/"}><p>Home</p></Link>
           <Link to={"cart"}><p>Cart</p></Link>
        </NavMenu>
    </>
}