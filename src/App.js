import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { cartDb } from "./DB";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
