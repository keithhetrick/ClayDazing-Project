import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import FAQPage from "./components/pages/FAQPage";
import AboutPage from "./components/pages/AboutPage";
import AffiliatesPage from "./components/pages/AffiliatesPage";
import SingleProductPage from "./components/pages/SingleProductPage";
import CartPage from "./components/pages/CartPage";
// import SearchPage from "./components/pages/SearchPage";
import ShippingPage from "./components/pages/ShippingPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import PaymentPage from "./components/pages/PaymentPage";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import OrderPage from "./components/pages/OrderPage";
import SearchBox from "./components/SearchBox";
import UserListPage from "./components/pages/UserListPage";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:keyword" element={<SearchBox />} />
            <Route path="/search/" element={<SearchBox />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/users/:id" />
            <Route path="/users/:id/update" />
            <Route path="/users/:id/history" />
            <Route path="/users/admin" />
            <Route path="/admin/userlist" element={<UserListPage />} />
            <Route path="/ratings" />
            <Route path="/wishlist" />
            {/* <Route path="/search" element={<SearchPage />} /> */}
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/affiliates" element={<AffiliatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/:id/:qty" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
