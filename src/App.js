import React, { useState, createContext } from 'react';
import ChildA from './ChildA.js'
import logo from './logo.svg';
import './App.css';
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

const [user, setUser] = useState("Ali");
const [cart, setCart] = useState([]);

const addToCart = (item) => {
  setCart(prevCart => [...prevCart, item]);
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

<MyContext.Provider value={contextValue}>
      <h1>Add To Cart</h1>
      <p>User: {user}</p>
      <p>Cart Items: {cart.length}</p>
      <ChildA />
    </MyContext.Provider>
    </>
  );
}

export default App;
