import "./App.css";
import ProductView from "./components/ProductView";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductView />} />
        {/* <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
