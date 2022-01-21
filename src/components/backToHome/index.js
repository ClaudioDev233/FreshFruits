import {Link} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BackButton } from './styles'
export default function BackToHome(){

    return <Link to={"/"}><BackButton><FaArrowLeft/></BackButton></Link>
}