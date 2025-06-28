import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './App';

function AddToCart() {
  const context = useContext(MyContext);

  if (!context) {
    return <p>Error: Context not found. Make sure you are rendering this inside MyContext.Provider.</p>;
  }

  const { addToCart, cart } = context;
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
    <div style={{ padding: '20px' }}>
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

export default AddToCart;
