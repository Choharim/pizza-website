import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyle";
import { productData } from "./components/Products/data";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="choose your favorite" data={productData} />
      <Footer />
    </Router>
  );
}

export default App;
