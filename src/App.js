import "./App.css";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart, { Modal } from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignupPage from "../src/component/SignUp/SignupPage";
import LoginPage from "./component/Login/LoginPage";
import React, { useState } from "react";
import ContextProvider from "./store/ContextProvider";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <ContextProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Meals />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserContext.Provider>
    </ContextProvider>
  );
}

export default App;
