import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/products" Component={Products} />
        <Route path="/products/:id" Component={ProductPage} />
      </Routes>
    </div>
  );
}

export default App;
