import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price, variants, inStock, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">${Number(price).toFixed(2)}</div>
        {variants && variants.length > 0 && (
          <select className="product-variant">
            {variants.map((variant, idx) => (
              <option key={idx} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        )}
        <button
          className="add-to-cart-btn"
          onClick={onAddToCart}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 