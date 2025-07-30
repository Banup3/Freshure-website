import React from 'react';
import './offers.css';

const offers = [
  {
    title: "20% OFF on First Order",
    description: "Use code FRESH20 at checkout",
    image: "assets/offer1.jpg",
  },
  {
    title: "Free Delivery on Orders above ₹299",
    description: "Limited period offer",
    image: "assets/offer2.jpeg",
  },
  {
    title: "Buy 2 Get 1 Free on Juices",
    description: "Valid on all types of juices",
    image: "assets/offer3.jpeg",
  },
];

const OffersSection = () => {
  return (
    <div className="offers-container">
      <h2>🔥 Special Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
