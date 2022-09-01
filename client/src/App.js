import "./App.css";
import ProductView from "./components/ProductView";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeView from "./components/HomeView";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeView />
      <ProductView />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
