import React from "react";
import "./ProductCard.css";

function getRandomRating() {
  return (Math.random() * 2 + 3).toFixed(1); // random between 3.0 and 5.0
}

const ProductCard = ({ image, name, price, variants, inStock, onAddToCart }) => {
  // Generate a random rating for demo
  const rating = getRandomRating();
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">
          {Array(fullStars).fill().map((_, i) => (
            <span key={i} className="star full">★</span>
          ))}
          {halfStar && <span className="star half">★</span>}
          {Array(emptyStars).fill().map((_, i) => (
            <span key={i} className="star empty">☆</span>
          ))}
        </div>
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