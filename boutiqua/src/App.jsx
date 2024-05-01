import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/src/pages/Home.jsx" element={<Home />} />
        <Route path="/src/pages/Login.jsx" element={<Login />} />
        <Route path="/src/pages/Register.jsx" element={<Register />} />
        <Route path="/src/pages/Cart.jsx" element={<Cart />} />
        <Route path="/src/pages/Product.jsx" element={<Product />} />
        <Route path="/src/pages/ProductList.jsx" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default App;
