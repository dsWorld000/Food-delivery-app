import React, { useState } from "react";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPop from "./components/LoginPopup/LoginPop";
import Joke from "./pages/JokesApart/Joke";
import ScrollToTopBtn from "./components/scrollToTop/ScrollToTopBtn";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/joke" element={<Joke />} />
        </Routes>
        <ScrollToTopBtn />
      </div>
      <Footer />
    </>
  );
};

export default App;
