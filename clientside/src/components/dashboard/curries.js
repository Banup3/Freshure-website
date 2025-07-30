import React,{useContext} from 'react';
import Dashboardnav from './navdashboard';
import DashboardTabs from './dashboardtabs';
import Footer from '../footer/footer';
import { CartContext } from '../cartcontext';
import { useState } from 'react';

function Curry() {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');
    const [quantities, setQuantities] = useState({});

    const handleAdd = (outlet) => {
    const quantity = quantities[outlet.id] || 1;
    addToCart({ ...outlet, quantity });
    setMessage(`${outlet.name} added to cart`);

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
    return(
    <>
      <Dashboardnav/>
      <DashboardTabs/>
      <div className="container mt-4">
        {message && (
          <div className="alert alert-success text-center" role="alert">
            {message}
          </div>
        )}
    <div className="row">
      {[
      { id:'#1',name: 'Paneer kofta', img: 'assets/Paneer-Tikka-Masala-4.webp',price:150},
       { id:'#2',name: 'Mushroom', img: 'assets/mushroom curry.jpg',price:150 },
      { id:'#3',name: 'Mixed veg curry', img: 'assets/veg curry.jpeg',price:200 },
      {id:'#4', name: 'Rajma', img: 'assets/rajma1.jpg',price:220},
      { id:'#5',name: 'Chole', img: 'assets/chole curry.jpg',price:250 },
    ].map((outlet) => (
      <div className="col-12 col-sm-6 col-md-4 mt-4 mb-4 d-flex justify-content-center">
        <div className="card outlet-card" style={{ width: '18rem' ,border:"none"}}>
          <a href='#'><img 
  src={outlet.img} 
  className="card-img-top" 
  alt={outlet.name}
  style={{
    height: '200px',
    objectFit: 'cover'
  }}
/>   </a> 
          <h4 className="card-title" style={{textAlign:"center"}}>{outlet.name}</h4>
          <h4 className="card-title" style={{textAlign:"center"}}>₹{outlet.price}</h4>
          <div className="d-flex justify-content-center align-items-center mb-2">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQty(outlet.id)}>-</button>
                    <span className="mx-2">{quantities[outlet.id] || 1}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQty(outlet.id)}>+</button>
                  </div>
          <button style={{width:"75px",borderRadius:'25px',position:'relative',left:"35%"}}onClick={() => handleAdd(outlet)}>add</button>
           {/* <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQty(outlet.id)}>-</button>
                    <span className="mx-2">{quantities[outlet.id] || 1}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQty(outlet.id)}>+</button>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAdd(outlet)}
                  >
                    Add
                  </button> */}
                  </div>
        </div>
    ))}
  </div>
  </div>
  <Footer/>
  </>
     );
}

export default Curry;