import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signin from "./components/Auth/sign-in/Signin";
import Signup from "./components/Auth/Sign-up/Signup";
import { home, about, products, contact } from "./constants";
import ProductListPage from "./pages/productList/ProductListpage";
import ProductDetailsPage from "./pages/productDetails/ProductDetailsPage";
import CartListPage from "./pages/cartList/CartListPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero data={home.banner} highlights={home.highlights} />
              <About data={about} />
              <Products data={products} />
              <Contact data={contact} />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </>
  );
}

export default App;
