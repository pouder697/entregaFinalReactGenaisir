import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import fetchData from "./utils/fetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/detalle/:id"
            element={<ItemDetail productos={productos} />}
          />
          <Route path="*"
           element={<NotFound />} 
           />
          <Route path="/cart"
           element={<Cart />} 
           />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
