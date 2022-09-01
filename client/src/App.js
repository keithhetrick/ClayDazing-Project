import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import SingleProductPage from "./components/pages/SingleProductPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route path="/login" />
            <Route path="/cart" />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
