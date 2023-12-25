import React from "react";
import { Route, Routes } from 'react-router-dom';



// import ProductDetails from './components/ProductDetails';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import CheckOut from './components/CheckOut/CheckOut';
import ShoppingCartProvider from "./context/ShoppingCartContext";


import Store from './components/Store';
import Footer from './components/Footer/Footer';
import { AuthProvider } from "./components/Auth";



import { Profile } from "./components/Profile";
import Login from "./components/Login";
import Register from"./components/Register";
import "./App.css";
import RequireAuth from "./components/RequireAuth";



function App() {
  return (
    <AuthProvider>
    <div className="App">
    <ShoppingCartProvider>
      <Navbar />
      

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Store />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/CheckOut' element={<CheckOut/>}/>
          <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        
          } 
        />
        </Routes>
        </ShoppingCartProvider>
    </div>
    <Footer />
    </AuthProvider>
  );
}

export default App;