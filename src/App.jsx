import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Sidebar />
      </Router>

      <Footer />
    </>
  );
}

export default App;
