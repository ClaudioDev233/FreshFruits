import { Link } from 'react-router-dom'
import {NavMenu} from './styles'
import { FaLemon, FaShoppingBag } from 'react-icons/fa';

export default function Menu(){

    return <>
        <NavMenu>
              <span><FaLemon color="green"></FaLemon><p>FRESH FRUITS</p></span>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"cart"}><FaShoppingBag color="#F65D13"/></Link></li>
            </ul> 
        </NavMenu>
    </>
}