import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "GOLDEN PILOT",
      features: [
        "Minimum deposit $500 for XAUUSD",
        "Expected Monthly Profit 30% - 35%",
        "Limited Drawdown",
        "81% Accuracy",
        "Compatible with any broker",
      ],
      oldPrice: "$1,118",
      newPrice: "$399",
      image: "/assets/golden_pilot.png",
      payments: [
        {
          type: "TRC20",
          wallet: "TNbvk8Zpyj9RSVcQyK8eNVtXs8tDuFT8vz",
          qr: "/assets/qr1.png",
        },
        {
          type: "ERC20",
          wallet: "0x97d044d7e601B3F9Da09c6D1F22f10289AbbbDD1",
          qr: "/assets/qr2.png",
        },
      ],
    },
    {
      title: "SWING PILOT",
      features: [
        "Minimum deposit $1000 for all currency pairs",
        "Expected Monthly Profit 35% - 45%",
        "Trade Multiple Pairs Simultaneously",
        "Risk Management With AI",
        "92% Accuracy",
      ],
      oldPrice: "$1398",
      newPrice: "$499",
      image: "/assets/swing_pilot.png",
      payments: [
        {
          type: "TRC20",
          wallet: "TNbvk8Zpyj9RSVcQyK8eNVtXs8tDuFT8vz",
          qr: "/assets/qr1.png",
        },
        {
          type: "ERC20",
          wallet: "0x97d044d7e601B3F9Da09c6D1F22f10289AbbbDD1",
          qr: "/assets/qr2.png",
        },
      ],
    },
  ];

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const copyWallet = (wallet) => {
    navigator.clipboard.writeText(wallet);
    alert("Wallet address copied!");
  };

  const goToFeatures = () => {
    navigate("/features");
  };

  return (
    <div>
      {products.map((product, index) => (
        <div
          key={index}
          className={`product-section ${index % 2 !== 0 ? "row-reverse" : ""}`}
        >
          <div className="product-details">
            <h2 className="section-title">Products:</h2>
            <h1 className="product-title">{product.title}</h1>
            <ul className="product-features">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="product-price">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
              <span className="lifetime">/Lifetime</span>
              <button className="buy-btn" onClick={() => handleBuy(product)}>
                Buy
              </button>
            </div>
            <button className="features-btn" onClick={goToFeatures}>
              All Features
            </button>
          </div>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProduct.title} Purchase</h2>

            {selectedProduct.payments.map((payment, index) => (
              <div key={index} className="payment-section">
                <h3>{payment.type} Payment</h3>
                <img src={payment.qr} alt={`${payment.type} QR`} className="modal-qr" />
                <p>
                  <strong className="wallet">Wallet Address:</strong> {payment.wallet}{" "}
                  <button className="copy-btn" onClick={() => copyWallet(payment.wallet)}>
                    Copy
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
