import { Link } from 'react-router-dom'

export default function Menu(){

    return <>
        <nav>
           <Link to={"/"}><p>Home</p></Link>
           <Link to={"./cart"}> <p>Cart</p></Link>
        </nav>
    </>
}