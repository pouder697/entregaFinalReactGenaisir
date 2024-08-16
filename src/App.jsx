
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import FiltroCategoria from "./components/FiltroCategoria/FiltroCategoria";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { AppContextProvider } from "./contexts/AppContext";

function App() {

  return (
    <>
    
    <AppContextProvider>
      
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            path="/detalle/:id"
            element={<ItemDetail />}
          />
            <Route
            path="/:categoria"
            element={<FiltroCategoria />}
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
      </AppContextProvider>
      
    </>
  );
}

export default App;
