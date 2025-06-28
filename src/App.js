import React, { useState, createContext } from 'react';
import ChildA from './ChildA.js'
import AddToCart from './AddToCart';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UseEffect from './UseEffect.jsx';
export const MyContext = createContext();

function App() {
// const [user, setUser] = useState("Ali")

// const [user, setUser] = useState("Ali");
// const [cart, setCart] = useState([]);

// const addToCart = (item) => {
//   setCart([...cart, item]);
// };

// const contextValue = {
//   user,
//   cart,
//   addToCart
// };

// const [user, setUser] = useState("Ali");
// const [cart, setCart] = useState([]);

// const addToCart = (item) => {
//   setCart(prevCart => [...prevCart, item]);
// };

// const contextValue = {
//   user,
//   cart,
//   addToCart,
// };

// const [user, setUser] = useState("Ali");
// const [cart, setCart] = useState([]);

// const addToCart = (item) => {
//   setCart(prevCart => [...prevCart, item]);
// };

// const contextValue = {
//   user,
//   cart,
//   addToCart,
// };

// const [user, setUser] = useState("Ali");
// const [cart, setCart] = useState([]);

// const addToCart = (item) => {
//   setCart(prevCart => [...prevCart, item]);
// };

// const contextValue = {
//   user,
//   cart,
//   addToCart,
// };

const [user, setUser] = useState('Ali');
const [cart, setCart] = useState([]);

const addToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]);
};

const contextValue = {
  user,
  cart,
  addToCart,
};

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* <UseEffect></UseEffect> */}

{/* <MyContext.Provider value={user}>
  <h1>Main App</h1>
  <ChildA />
</MyContext.Provider> */}

{/* <MyContext.Provider value={contextValue}>
      <h1>Main App</h1>
      <p>User: {user}</p>
      <p>Cart Items: {cart.length}</p>
      <ChildA />
    </MyContext.Provider> */}

{/* <MyContext.Provider value={contextValue}>
      <h1>Add To Cart</h1>
      <p>User: {user}</p>
      <p>Cart Items: {cart.length}</p>
      <ChildA />
    </MyContext.Provider> */}

{/* <MyContext.Provider value={contextValue}>
      <h1>Add To Cart</h1>
      <p>User: {user}</p>
      <p>Cart Items: {cart.length}</p>
      <ChildA />
    </MyContext.Provider> */}

<MyContext.Provider value={contextValue}>
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/addtocart" element={<AddToCart />} />
    </Route>
  </Routes>
</MyContext.Provider>
    </>
  );
}

export default App;
