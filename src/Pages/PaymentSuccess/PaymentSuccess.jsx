import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PaymentSuccess.css'; // Assuming you have this CSS file for styling

const PaymentSuccess = () => {
  useEffect(() => {
    // Clear the cart items from localStorage
    localStorage.removeItem('productCart'); // Adjust the key if different
  }, []);

  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h1>Payment Successful!</h1>
        <p>Your payment was processed successfully. Thank you for your purchase!</p>
        <Link to="/products" className="back-to-products">Back to Products</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
