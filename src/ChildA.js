// import React, {useContext} from 'react';
// import {MyContext} from './App';

// function ChildA() {
//     const user = useContext(MyContext);
//     return <h3>Hello {user} from ChildA</h3>
// }

// export default ChildA;

// import React, { useContext } from 'react';
// import { MyContext } from './App';

// function ChildA() {
//   const { user, addToCart, cart } = useContext(MyContext);

//   const handleAdd = () => {
//     const item = { id: cart.length + 1, name: 'Product ' + (cart.length + 1) };
//     addToCart(item);
//   };

//   return (
//     <div>
//       <h3>Hello {user} from ChildA</h3>
//       <button onClick={handleAdd}>Add to Cart</button>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ChildA;

// import React, { useContext } from 'react';
// import { MyContext } from './App';

// function ChildA() {
//   const { user, addToCart, cart } = useContext(MyContext);

//   // 🔒 Hardcoded product list
//   const products = [
//     { id: 1, name: 'Laptop' },
//     { id: 2, name: 'Phone' },
//     { id: 3, name: 'Headphones' },
//     { id: 4, name: 'Keyboard' }
//   ];

//   const handleAdd = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div>
//       <h3>Hello {user} from ChildA</h3>
//       <h4>Products:</h4>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name}
//             <button onClick={() => handleAdd(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>

//       <h4>Cart:</h4>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ChildA;

// import React, { useContext } from 'react';
// import { MyContext } from './App';

// function ChildA() {
//   const { user, addToCart, cart } = useContext(MyContext);

//   const products = [
//     { id: 1, name: 'Laptop', price: 10000 },
//     { id: 2, name: 'Phone', price: 2500 },
//     { id: 3, name: 'Headphones', price: 1100 },
//     { id: 4, name: 'Keyboard', price: 1250 }
//   ];

//   const handleAdd = (product) => {
//     addToCart(product);
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div>
//       <h4>Products:</h4>
//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         {products.map(product => (
//           <div
//             key={product.id}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               padding: '16px',
//               width: '200px',
//               textAlign: 'center',
//               boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//             }}
//           >
//             <h5>{product.name}</h5>
//             <p>Price: ${product.price}</p>
//             <button onClick={() => handleAdd(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       <h4 style={{ marginTop: '30px' }}>Cart:</h4>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>{item.name} - ${item.price}</li>
//         ))}
//       </ul>
//       <h5>Total: ${totalPrice}</h5>
//     </div>
//   );
// }

// export default ChildA;

// import React, { useContext, useEffect, useState } from 'react';
// import { MyContext } from './App';

// function ChildA() {
//   const { addToCart, cart } = useContext(MyContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Replace with your actual API endpoint
//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => {
//         // Map or adapt data to your product shape if needed
//         const fetchedProducts = data.map(item => ({
//           id: item.id,
//           name: item.title,
//           price: item.price
//         }));
//         setProducts(fetchedProducts);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   const handleAdd = (product) => {
//     addToCart(product);
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div>
//       <h4>Products:</h4>
//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         {products.map(product => (
//           <div
//             key={product.id}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               padding: '16px',
//               width: '200px',
//               textAlign: 'center',
//               boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//             }}
//           >
//             <h5>{product.name}</h5>
//             <p>Price: ${product.price}</p>
//             <button onClick={() => handleAdd(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       <h4 style={{ marginTop: '30px' }}>Cart:</h4>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>{item.name} - ${item.price}</li>
//         ))}
//       </ul>
//       <h5>Total: ${totalPrice}</h5>
//     </div>
//   );
// }

// export default ChildA;

// import React, { useContext, useEffect, useState } from 'react';
// import { MyContext } from './App';

// function ChildA() {
//   const { addToCart, cart } = useContext(MyContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products from the API
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => {
//         const fetchedProducts = data.map(item => ({
//           id: item.id,
//           name: item.title,
//           price: item.price,
//           image: item.image
//         }));
//         setProducts(fetchedProducts);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   const handleAdd = (product) => {
//     addToCart(product);
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div>
//       <h4>Products:</h4>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {products.map(product => (
//           <div
//             key={product.id}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               padding: '16px',
//               width: '200px',
//               textAlign: 'center',
//               boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//             }}
//           >
//             <img 
//               src={product.image} 
//               alt={product.name} 
//               style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }} 
//             />
//             <h5 style={{ fontSize: '14px' }}>{product.name}</h5>
//             <p>Price: ${product.price.toFixed(2)}</p>
//             <button onClick={() => handleAdd(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       <h4 style={{ marginTop: '30px' }}>Cart:</h4>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//       <h5>Total: ${totalPrice.toFixed(2)}</h5>
//     </div>
//   );
// }

// export default ChildA;

import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './App';

function ChildA() {
  const { addToCart, cart } = useContext(MyContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const fetchedProducts = data.map(item => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image
        }));
        setProducts(fetchedProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAdd = (product) => {
    addToCart(product);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h4>Products:</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }} 
            />
            <h5 style={{ fontSize: '14px' }}>{product.name}</h5>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleAdd(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h4 style={{ marginTop: '30px' }}>Cart:</h4>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                width: '200px',
                textAlign: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }} 
              />
              <h5 style={{ fontSize: '14px' }}>{item.name}</h5>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
      <h5>Total: ${totalPrice.toFixed(2)}</h5>
    </div>
  );
}

export default ChildA;
