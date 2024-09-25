import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FormApp from "./pages/Form";
import { ProductsProvider } from './context/ProductsContext'; 
import ListProducts from "./pages/ListProducts";
import ProductForm from "./pages/ProductForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProductsProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Form" element={<FormApp />} />
        <Route path="/List-Products" element={<ListProducts />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes>
    </Router>
    </ProductsProvider>
  );
}

export default App;
