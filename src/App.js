
import { Route, Routes } from 'react-router-dom';


import Cart from './pages/cart';
import Home from './pages/home';
import './App.css';
import { CartProvider } from './contexts/cartContext';




function App() {

  /* Coisas para adicionar (não estão em ordem): 
   - Busca dinamica usando params
   - context do carrinho
   -icone do carrinho dinamico (usando context)
   - pagina de detalhes da fruta  */


  return ( <>

    <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </CartProvider>
    </>
  );
}

export default App;
