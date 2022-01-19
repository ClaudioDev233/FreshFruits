
import { Route, Routes } from 'react-router-dom';


import Cart from './pages/cart';
import Home from './pages/home';
import './App.css';




function App() {



  /* const frutaFitrada = imgFruit.filter(fruitImg => fruit.name === fruitImg.nome) */

  return ( <>

  
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  );
}

export default App;
