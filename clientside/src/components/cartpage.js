import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import Dashboardnav from '../components/dashboard/navdashboard';
import Footer from './footer/footer';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart, clearCart,makePayment } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout', { state: { totalAmount } });
  };

  return (
    <>
      <Dashboardnav />
      <div className="container "style={{ marginTop: '180px' }}>
        <h2 className="text-center mb-4">🛒 Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center ">Your cart is empty.</p>
        ) : (
          <>
            <div className="row">
              {cartItems.map((item) => (
                <div className="col-md-6 mb-4 mt-10" key={item.id}>
                  <div className="card shadow-sm p-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p>Price:{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                     <p>Subtotal: ₹{Number(item.price) * item.quantity}</p>
                
                  <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-end">Total: ₹{totalAmount}</h4>

            <div className="text-center mb-4">
                 <button
        onClick={goToCheckout}
        className=" bth btn-warning mt-3"
      >
        Proceed to Checkout
      </button></div>
              <div className="text-center mb-4">
              <button className="btn btn-warning mt-3" onClick={clearCart}>
                Clear Cart
              </button>
              </div>
          </>
        )}
       </div>
      <Footer />
    </>
  );
}

export default CartPage;
