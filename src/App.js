import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart";
import Home from "./pages/home";
import "./App.css";
import { CartProvider } from "./contexts/cartContext";
import Details from "./pages/details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </CartProvider>
      <ToastContainer />
    </>
  );
}

export default App;
