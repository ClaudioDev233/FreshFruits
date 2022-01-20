
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react'

import Cart from './pages/cart';
import Home from './pages/home';
import './App.css';
import { CartProvider } from './contexts/cartContext';
import Details from './pages/details';






function App() {

  /* Coisas para adicionar (não estão em ordem): 
   - Busca dinamica usando params
   - context do carrinho
   -icone do carrinho dinamico (usando context)
   - pagina de detalhes da fruta  */

  

  return (
     <>
    
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        
      </Routes>
    </CartProvider>
    
    </>
  );
}

export default App;
