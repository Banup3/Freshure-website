
import React, { useContext, useState } from 'react';
import { CartContext } from '../cartcontext';
import Dashboardnav from './navdashboard';
import Footer from '../footer/footer';
import DashboardTabs from './dashboardtabs';

function Biryani() {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');
  const [quantities, setQuantities] = useState({});

  const biryaniItems = [
    { id: 1, name: 'Veg Biryani', img: 'assets/veg bir.jpeg', price: 150 },
    { id: 2, name: 'Paneer Biryani', img: 'assets/paneer-biryani-1.jpg', price: 200 },
    { id: 3, name: 'Brown Rice Biryani', img: 'assets/brwon rice.jpg', price: 220 },
    { id: 4, name: 'Sindhi Biryani', img: 'assets/sindhi.jpg', price: 250 },
    { id: 5, name: 'Matka Biryani', img: 'assets/matka.jpg', price: 175 },
    { id: 6, name: 'Foxtail Millet Biryani', img: 'assets/lorralu.jpg', price: 250 },
  ];

  const handleAdd = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart({ ...item, quantity });
    setMessage(`${item.name} added to cart`);

    // Reset message after 2 seconds
    setTimeout(() => setMessage(''), 2000);
  };

  const increaseQty = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[id] || 1) - 1);
      return { ...prev, [id]: newQty };
    });
  };

  return (
    <>
      <Dashboardnav />
      <DashboardTabs />
      <div className="container mt-4">
        {message && (
          <div className="alert alert-success text-center" role="alert">
            {message}
          </div>
        )}
        <div className="row">
          {biryaniItems.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 mt-4 mb-4 d-flex justify-content-center" key={item.id}>
              <div className="card outlet-card" style={{ width: '18rem', border: "none" }}>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p>₹{item.price}/-</p>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQty(item.id)}>-</button>
                    <span className="mx-2">{quantities[item.id] || 1}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAdd(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Biryani;
